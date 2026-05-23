'use client'

import { motion } from 'framer-motion'
import { ChevronDown, Sparkles, Star } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'

type Props = {
  badge: string
  headline: string
  subheadline: string
}

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
}

export function Hero({ badge, headline, subheadline }: Props) {
  return (
    <section className="relative isolate flex min-h-[calc(100svh-5rem)] items-center justify-center overflow-hidden">
      {/* Dot pattern lattice. */}
      <div className="pointer-events-none absolute inset-0 -z-10 grid-dot-pattern opacity-[0.4]" aria-hidden />

      {/* Drifting accent orbs — depth without distraction. */}
      <div
        className="pointer-events-none absolute -top-[35%] left-1/2 -z-10 size-[120vmin] -translate-x-1/2 rounded-full hero-orb orb-drift-a"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute top-[15%] -right-[15%] -z-10 size-[60vmin] rounded-full hero-orb-soft orb-drift-b opacity-70"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-[5%] -left-[10%] -z-10 size-[45vmin] rounded-full hero-orb-soft opacity-60"
        aria-hidden
      />

      {/* Soft fade to canvas at the bottom so subsequent sections breathe. */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-b from-transparent to-[var(--color-canvas)]" aria-hidden />

      <Container className="py-20 sm:py-28 text-center">
        <motion.div initial="hidden" animate="show" variants={{ show: { transition: { staggerChildren: 0.12 } } }}>
          <motion.div variants={fadeUp} transition={{ duration: 0.5 }} className="inline-block">
            <Badge>
              <Sparkles className="size-3.5" aria-hidden />
              {badge.replace(/^[^\w]+/, '')}
            </Badge>
          </motion.div>
          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="mt-6 text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            {headline.split(' — ').map((chunk, i, arr) => (
              <span key={`${chunk}-${i}`}>
                {i > 0 ? <span className="text-[var(--color-accent)]"> — </span> : null}
                {chunk}
                {i === arr.length - 1 ? null : ''}
              </span>
            ))}
          </motion.h1>
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="mx-auto mt-6 max-w-2xl text-balance text-base sm:text-lg text-[var(--color-muted)] leading-relaxed"
          >
            {subheadline}
          </motion.p>
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Button href="/case-studies" size="lg" withArrow>
              View Case Studies
            </Button>
            <Button href="/contact" size="lg" variant="secondary">
              Let&apos;s Talk
            </Button>
          </motion.div>
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-5"
          >
            <div
              className="flex items-center gap-1 text-[var(--color-accent)]"
              aria-label="Rated 5 out of 5 by clients"
            >
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-4 fill-[var(--color-accent)]" aria-hidden />
              ))}
            </div>
            <span className="hidden h-4 w-px bg-[var(--color-line-strong)] sm:inline-block" aria-hidden />
            <p className="text-sm text-[var(--color-muted)]">
              Trusted by 40+ brands across 12 industries
            </p>
          </motion.div>
        </motion.div>
      </Container>
      <div className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[var(--color-muted)]">
        <span className="text-[10px] uppercase tracking-[0.24em]">Scroll</span>
        <ChevronDown className="size-5 scroll-indicator" aria-hidden />
      </div>
    </section>
  )
}
