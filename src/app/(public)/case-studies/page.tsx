import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Badge } from '@/components/ui/Badge'
import { CTABanner } from '@/components/sections/CTABanner'
import { PageImage } from '@/components/PageImage'
import { listPublishedCaseStudies } from '@/lib/case-studies'

export const metadata: Metadata = {
  title: 'Case Studies',
  description:
    'Real SEO engagements with measurable results — technical recoveries, local lead engines, e-commerce category growth, and more.',
}

export default async function CaseStudiesPage() {
  const studies = await listPublishedCaseStudies()
  return (
    <>
      <Section>
        <Container className="text-center">
          <Badge>Case studies</Badge>
          <h1 className="mt-5 text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mx-auto max-w-3xl">
            Real engagements. Real, measurable results.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-[var(--color-muted)] text-base sm:text-lg leading-relaxed">
            Highlights from the last few years of audits, retainers and strategy engagements across B2B SaaS, e-commerce, and local services.
          </p>
        </Container>
      </Section>

      <Section className="pt-0 sm:pt-0 lg:pt-0">
        <Container>
          <div className="grid gap-8 md:grid-cols-2">
            {studies.map((study) => (
              <Link
                key={study.id}
                href={`/case-studies/${study.slug}`}
                className="group relative overflow-hidden rounded-3xl border border-[var(--color-line)] bg-[var(--color-surface)]/70 transition hover:border-[var(--color-accent)]/40 hover:shadow-[var(--shadow-glow)]"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-[var(--color-elevated)]">
                  <PageImage
                    publicId={study.cover_image_public_id}
                    fallbackUrl={study.cover_image_url}
                    alt={study.title}
                    width={1200}
                    height={750}
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="absolute inset-0 size-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--color-canvas)] via-transparent to-transparent" />
                </div>
                <div className="p-6 sm:p-7">
                  {study.industry ? <Badge>{study.industry}</Badge> : null}
                  <h3 className="mt-4 text-xl sm:text-2xl font-semibold">{study.title}</h3>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {study.results.slice(0, 2).map((r) => (
                      <div
                        key={r.label}
                        className="rounded-xl border border-[var(--color-line)] bg-[var(--color-canvas)]/60 px-3 py-2 text-sm"
                      >
                        <div className="font-semibold text-[var(--color-accent)]">{r.value}</div>
                        <div className="text-xs text-[var(--color-muted)]">{r.label}</div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-accent)]">
                    Read more <ArrowRight className="size-4 transition group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <CTABanner />
    </>
  )
}
