'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
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
