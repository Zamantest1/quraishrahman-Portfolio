'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Badge } from '@/components/ui/Badge'
import type { CaseStudy } from '@/types'

type Props = {
  caseStudy: CaseStudy
}

export function FeaturedCaseStudy({ caseStudy }: Props) {
  return (
    <Section variant="surface">
      <Container>
        <SectionHeading
          eyebrow="Results that speak"
          title={<>One engagement, three durable numbers.</>}
          subtitle="A representative case — every retainer is built to produce defensible wins like these."
        />
        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
          className="mt-12 relative overflow-hidden rounded-3xl border border-[var(--color-line)] bg-[var(--color-surface)]/80 p-6 sm:p-10 lg:p-12"
        >
          <div className="pointer-events-none absolute inset-0 -z-10 opacity-50" aria-hidden>
            <div className="absolute -right-1/4 top-0 size-[60%] rounded-full hero-orb-soft" />
          </div>
          <div className="grid gap-10 lg:grid-cols-5 lg:items-center">
            <div className="lg:col-span-3">
              {caseStudy.industry ? <Badge>{caseStudy.industry}</Badge> : null}
              <h3 className="mt-5 text-2xl sm:text-3xl font-bold">{caseStudy.title}</h3>
              <div
                className="mt-5 text-[var(--color-muted)] leading-relaxed [&>p:not(:last-child)]:mb-3"
                dangerouslySetInnerHTML={{ __html: caseStudy.challenge_html ?? '' }}
              />
              <Link
                href={`/case-studies/${caseStudy.slug}`}
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-accent)] hover:underline underline-offset-4"
              >
                Read the full case study <ArrowRight className="size-4" />
              </Link>
            </div>
            <div className="lg:col-span-2 grid gap-3">
              {caseStudy.results.map((r) => (
                <div
                  key={r.label}
                  className="rounded-2xl border border-[var(--color-line)] bg-[var(--color-canvas)]/60 p-5"
                >
                  <div
                    className="text-3xl font-bold text-[var(--color-accent)]"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {r.value}
                  </div>
                  <div className="mt-1 text-xs uppercase tracking-[0.12em] text-[var(--color-muted)]">
                    {r.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.article>
        <div className="mt-10 text-center">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-accent)] hover:underline underline-offset-4"
          >
            See all case studies <ArrowRight className="size-4" />
          </Link>
        </div>
      </Container>
    </Section>
  )
}
