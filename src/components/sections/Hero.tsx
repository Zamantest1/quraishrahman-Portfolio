'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
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
      <div className="pointer-events-none absolute inset-0 -z-10 grid-dot-pattern opacity-[0.4]" aria-hidden />
      <div
        className="pointer-events-none absolute -top-1/2 left-1/2 -z-10 size-[120vmin] -translate-x-1/2 rounded-full"
        style={{
          background:
            'radial-gradient(closest-side, rgba(59,130,246,0.25), rgba(59,130,246,0.1) 40%, transparent 70%)',
        }}
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-b from-transparent to-[var(--color-canvas)]" aria-hidden />

      <Container className="py-20 sm:py-28 text-center">
        <motion.div initial="hidden" animate="show" variants={{ show: { transition: { staggerChildren: 0.12 } } }}>
          <motion.div variants={fadeUp} transition={{ duration: 0.5 }} className="inline-block">
            <Badge>{badge}</Badge>
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
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="mt-8 text-sm text-[var(--color-muted)]"
          >
            Trusted by 40+ brands across 12 industries
          </motion.p>
        </motion.div>
      </Container>
      <div className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 text-[var(--color-muted)]">
        <ChevronDown className="size-5 scroll-indicator" aria-hidden />
      </div>
    </section>
  )
}
