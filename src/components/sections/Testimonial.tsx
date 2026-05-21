'use client'

import { motion } from 'framer-motion'
import { Quote, Star } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'

type Props = {
  quote: string
  author: string
  title: string
}

export function Testimonial({ quote, author, title }: Props) {
  return (
    <Section>
      <Container>
        <motion.figure
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
          className="relative mx-auto max-w-3xl text-center"
        >
          <Quote
            className="mx-auto size-10 text-[var(--color-accent)]/30"
            aria-hidden
          />
          <div
            className="mt-5 flex items-center justify-center gap-1"
            aria-label="Rated 5 out of 5 by client"
          >
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="size-4 fill-[var(--color-accent)] text-[var(--color-accent)]" aria-hidden />
            ))}
          </div>
          <blockquote
            className="mt-6 text-2xl sm:text-3xl lg:text-4xl font-medium leading-snug italic"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            “{quote}”
          </blockquote>
          <figcaption className="mt-8 text-sm text-[var(--color-muted)]">
            <span className="font-semibold text-[var(--color-foreground)]">{author}</span>
            {title ? <> · {title}</> : null}
          </figcaption>
        </motion.figure>
      </Container>
    </Section>
  )
}
