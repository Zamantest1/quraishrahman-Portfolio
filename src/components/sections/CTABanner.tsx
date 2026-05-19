'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'

type Props = {
  heading?: string
  subheading?: string
  primaryHref?: string
  primaryLabel?: string
}

export function CTABanner({
  heading = 'Ready to grow your organic traffic?',
  subheading = "Let's build an SEO strategy tailored to your goals.",
  primaryHref = '/contact',
  primaryLabel = 'Book a free consultation',
}: Props) {
  return (
    <section className="relative isolate overflow-hidden">
      <Container className="py-16 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl px-6 py-12 sm:px-12 sm:py-16 lg:py-20"
          style={{ background: 'linear-gradient(135deg, #1d4ed8 0%, #3b82f6 100%)' }}
        >
          <div
            className="pointer-events-none absolute -inset-1 -z-10 blur-2xl"
            style={{
              background:
                'radial-gradient(closest-side, rgba(59,130,246,0.55), transparent 70%)',
            }}
            aria-hidden
          />
          <div className="relative grid gap-8 lg:grid-cols-5 lg:items-center">
            <div className="lg:col-span-3">
              <h2 className="text-3xl sm:text-4xl font-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>
                {heading}
              </h2>
              <p className="mt-3 text-white/90 text-base sm:text-lg max-w-xl leading-relaxed">{subheading}</p>
            </div>
            <div className="lg:col-span-2 lg:flex lg:justify-end">
              <Button
                href={primaryHref}
                size="lg"
                withArrow
                className="bg-white !text-[#1d4ed8] hover:bg-white/95"
              >
                {primaryLabel}
              </Button>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
