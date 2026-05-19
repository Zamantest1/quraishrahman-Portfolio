'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'

const VISITOR_KEY = 'qr_visitor_id'
const HEARTBEAT_MS = 30_000

async function buildFingerprint(): Promise<string> {
  const parts = [
    typeof navigator !== 'undefined' ? navigator.userAgent : '',
    typeof window !== 'undefined' ? `${window.screen.width}x${window.screen.height}` : '',
    typeof Intl !== 'undefined' ? Intl.DateTimeFormat().resolvedOptions().timeZone : '',
    typeof navigator !== 'undefined' ? navigator.language : '',
  ].join('|')
  if (typeof crypto !== 'undefined' && crypto.subtle) {
    const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(parts))
    return Array.from(new Uint8Array(buf)).map((b) => b.toString(16).padStart(2, '0')).join('')
  }
  let hash = 0
  for (let i = 0; i < parts.length; i++) hash = (hash * 31 + parts.charCodeAt(i)) >>> 0
  return `fb_${hash.toString(16)}`
}

async function getVisitorId(): Promise<string> {
  if (typeof window === 'undefined') return ''
  const existing = localStorage.getItem(VISITOR_KEY)
  if (existing) return existing
  const id = await buildFingerprint()
  localStorage.setItem(VISITOR_KEY, id)
  return id
}

export function AnalyticsTracker() {
  const pathname = usePathname()
  const heartbeatTimer = useRef<ReturnType<typeof setInterval> | null>(null)
  const lastTrackedPath = useRef<string | null>(null)

  useEffect(() => {
    let cancelled = false
    void (async () => {
      const visitor_id = await getVisitorId()
      if (cancelled) return
      if (lastTrackedPath.current === pathname) return
      lastTrackedPath.current = pathname
      try {
        await fetch('/api/analytics/pageview', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            page_path: pathname,
            visitor_id,
            referrer: document.referrer || null,
          }),
          keepalive: true,
        })
      } catch {
        // Silent — analytics must not affect UX.
      }
    })()
    return () => {
      cancelled = true
    }
  }, [pathname])

  useEffect(() => {
    let cancelled = false
    const sendHeartbeat = async () => {
      const visitor_id = await getVisitorId()
      if (cancelled) return
      try {
        await fetch('/api/analytics/heartbeat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ visitor_id, current_page: pathname }),
          keepalive: true,
        })
      } catch {
        // ignore
      }
    }
    void sendHeartbeat()
    heartbeatTimer.current = setInterval(() => void sendHeartbeat(), HEARTBEAT_MS)

    const onBeforeUnload = () => {
      const id = localStorage.getItem(VISITOR_KEY)
      if (!id) return
      const data = JSON.stringify({ visitor_id: id })
      if (navigator.sendBeacon) {
        navigator.sendBeacon('/api/analytics/end', new Blob([data], { type: 'application/json' }))
      }
    }
    window.addEventListener('beforeunload', onBeforeUnload)
    return () => {
      cancelled = true
      window.removeEventListener('beforeunload', onBeforeUnload)
      if (heartbeatTimer.current) clearInterval(heartbeatTimer.current)
    }
  }, [pathname])

  return null
}
