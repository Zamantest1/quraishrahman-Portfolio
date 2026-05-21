'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Award, Globe2, LineChart, Sparkles } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { homepageStatsDisplay } from '@/lib/content-defaults'

function useCounter(target: number, durationMs: number, start: boolean) {
  const [value, setValue] = useState(0)
  const raf = useRef<number | null>(null)
  useEffect(() => {
    if (!start) return
    const startTime = performance.now()
    const step = (now: number) => {
      const elapsed = Math.min(1, (now - startTime) / durationMs)
      const eased = 1 - Math.pow(1 - elapsed, 3)
      setValue(Math.round(eased * target))
      if (elapsed < 1) raf.current = requestAnimationFrame(step)
    }
    raf.current = requestAnimationFrame(step)
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current)
    }
  }, [start, target, durationMs])
  return value
}

function formatBigNumber(n: number, suffix?: string): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(n % 1_000_000 === 0 ? 0 : 1)}M${suffix ?? ''}`
  if (n >= 1_000) return `${(n / 1_000).toFixed(0)}K${suffix ?? ''}`
  return `${n}${suffix ?? ''}`
}

// Icons attach to stats in the order they appear in homepageStatsDisplay.
const statIcons = [LineChart, Globe2, Sparkles, Award]

type StatProps = (typeof homepageStatsDisplay)[number] & { inView: boolean; index: number }

function Stat({ rawValue, suffix, label, inView, index }: StatProps) {
  const value = useCounter(rawValue, 1400, inView)
  const display = rawValue >= 1000 ? formatBigNumber(value, suffix) : `${value}${suffix ?? ''}`
  const Icon = statIcons[index % statIcons.length] ?? LineChart
  return (
    <div className="flex flex-col items-center text-center">
      <div className="mb-3 inline-flex size-9 items-center justify-center rounded-full bg-[var(--color-accent-tint)] text-[var(--color-accent)] ring-1 ring-[var(--color-accent)]/25">
        <Icon className="size-4" aria-hidden />
      </div>
      <div
        className="text-4xl sm:text-5xl font-bold text-[var(--color-accent)]"
        style={{ fontFamily: 'var(--font-display)' }}
      >
        {display}
      </div>
      <div className="mt-2 text-xs sm:text-sm uppercase tracking-[0.14em] text-[var(--color-muted)]">{label}</div>
    </div>
  )
}

export function StatsBar() {
  const ref = useRef<HTMLDivElement | null>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  return (
    <section className="relative border-y border-[var(--color-line)] bg-[var(--color-surface)]/70 backdrop-blur-sm">
      <Container className="py-14 sm:py-16">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 gap-y-10 sm:gap-y-12 lg:grid-cols-4 lg:divide-x lg:divide-[var(--color-line)]/70"
        >
          {homepageStatsDisplay.map((s, i) => (
            <div key={s.label} className={i > 0 && i < 4 ? 'lg:pl-8' : 'lg:pr-8 lg:pl-0'}>
              <Stat {...s} inView={inView} index={i} />
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
