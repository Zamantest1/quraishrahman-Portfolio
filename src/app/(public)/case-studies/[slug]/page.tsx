import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, Quote } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Badge } from '@/components/ui/Badge'
import { CTABanner } from '@/components/sections/CTABanner'
import { PageImage } from '@/components/PageImage'
import { getCaseStudyBySlug, listAllCaseStudySlugs } from '@/lib/case-studies'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  const slugs = await listAllCaseStudySlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const study = await getCaseStudyBySlug(slug)
  if (!study) return { title: 'Case study not found' }
  return {
    title: study.title,
    description: study.industry ? `${study.industry} — ${study.title}` : study.title,
  }
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params
  const study = await getCaseStudyBySlug(slug)
  if (!study) notFound()
  return (
    <>
      <Section>
        <Container>
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-1.5 text-sm text-[var(--color-muted)] hover:text-[var(--color-accent)]"
          >
            <ArrowLeft className="size-4" /> All case studies
          </Link>
          <div className="mt-8 grid gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-7">
              {study.industry ? <Badge>{study.industry}</Badge> : null}
              <h1 className="mt-5 text-balance text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                {study.title}
              </h1>
              <div className="mt-7 grid grid-cols-3 gap-4">
                {study.results.map((r) => (
                  <div
                    key={r.label}
                    className="rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)]/70 p-5"
                  >
                    <div
                      className="text-2xl sm:text-3xl font-bold text-[var(--color-accent)]"
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
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-[var(--color-line)]">
                <PageImage
                  publicId={study.cover_image_public_id}
                  fallbackUrl={study.cover_image_url}
                  alt={study.title}
                  width={1200}
                  height={900}
                  sizes="(min-width: 1024px) 36vw, 100vw"
                  className="absolute inset-0 size-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section variant="surface">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">The challenge</h2>
              <div
                className="tiptap-content mt-5"
                dangerouslySetInnerHTML={{ __html: study.challenge_html ?? '' }}
              />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">The strategy</h2>
              <div
                className="tiptap-content mt-5"
                dangerouslySetInnerHTML={{ __html: study.strategy_html ?? '' }}
              />
            </div>
          </div>
        </Container>
      </Section>

      {study.testimonial ? (
        <Section>
          <Container>
            <figure className="mx-auto max-w-3xl text-center">
              <Quote className="mx-auto size-9 text-[var(--color-accent)]/30" aria-hidden />
              <blockquote
                className="mt-5 text-xl sm:text-2xl lg:text-3xl italic leading-snug font-medium"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                “{study.testimonial}”
              </blockquote>
              <figcaption className="mt-6 text-sm text-[var(--color-muted)]">
                {study.testimonial_author ? (
                  <span className="font-semibold text-[var(--color-foreground)]">{study.testimonial_author}</span>
                ) : null}
                {study.testimonial_company ? <> · {study.testimonial_company}</> : null}
              </figcaption>
            </figure>
          </Container>
        </Section>
      ) : null}

      <CTABanner />
    </>
  )
}
