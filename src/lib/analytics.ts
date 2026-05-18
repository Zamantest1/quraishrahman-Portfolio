import { isSupabaseConfigured, supabase } from './supabase'

type VisitPayload = {
  path: string
  referrer?: string
  utm?: Record<string, string>
}

type EventPayload = {
  name: string
  properties?: Record<string, string | number | boolean | null>
}

function parseUtm(search: string): Record<string, string> {
  const params = new URLSearchParams(search)
  const utm: Record<string, string> = {}
  params.forEach((value, key) => {
    if (key.startsWith('utm_')) {
      utm[key] = value
    }
  })
  return utm
}

/**
 * Record a public page view. No-ops when Supabase is not configured,
 * so the frontend ships safely before the analytics table is created.
 * The backend dashboard can later query the `visits` table for traffic.
 */
export async function trackPageView(payload?: Partial<VisitPayload>) {
  if (typeof window === 'undefined' || !isSupabaseConfigured || !supabase) {
    return
  }

  const visit: VisitPayload = {
    path: payload?.path ?? window.location.pathname + window.location.search,
    referrer: payload?.referrer ?? document.referrer ?? undefined,
    utm: payload?.utm ?? parseUtm(window.location.search),
  }

  try {
    await supabase.from('visits').insert({
      path: visit.path,
      referrer: visit.referrer ?? null,
      utm: visit.utm ?? {},
      user_agent: navigator.userAgent,
    })
  } catch (error) {
    console.debug('analytics: page view skipped', error)
  }
}

/**
 * Record a public-side event (e.g. CTA click, form submit, blog open).
 * Safe no-op when Supabase isn't configured.
 */
export async function trackEvent(payload: EventPayload) {
  if (typeof window === 'undefined' || !isSupabaseConfigured || !supabase) {
    return
  }

  try {
    await supabase.from('events').insert({
      name: payload.name,
      properties: payload.properties ?? {},
      path: window.location.pathname,
    })
  } catch (error) {
    console.debug('analytics: event skipped', error)
  }
}
