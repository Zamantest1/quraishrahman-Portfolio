import type { Metadata } from 'next'
import {
  Search,
  FileText,
  Link as LinkIcon,
  MapPin,
  Compass,
  CheckCircle2,
} from 'lucide-react'
import type { ComponentType, SVGProps } from 'react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { IconCircle } from '@/components/ui/IconCircle'
import { CTABanner } from '@/components/sections/CTABanner'
import { FAQ } from '@/components/FAQ'
import { services, faqs } from '@/lib/services-data'
import { getSiteContent, getContent } from '@/lib/site-content'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Technical SEO audits, content strategy, link building, local SEO and senior SEO retainers — services tailored to your business stage and growth goal.',
}

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>

const iconMap: Record<string, IconComponent> = {
  Search,
  FileText,
  Link: LinkIcon,
  MapPin,
  Compass,
}

export default async function ServicesPage() {
  const content = await getSiteContent()
  return (
    <>
      <Section>
        <Container className="text-center">
          <Badge>Services</Badge>
          <h1 className="mt-5 text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mx-auto max-w-3xl">
            SEO services scoped to your stage and goal.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-[var(--color-muted)] text-base sm:text-lg leading-relaxed">
            {getContent(content, 'services_intro')}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button href="/contact" withArrow>Get a free audit</Button>
            <Button href="/case-studies" variant="secondary">See real results</Button>
          </div>
        </Container>
      </Section>

      {services.map((service, idx) => {
        const Icon = iconMap[service.icon] ?? Search
        const reverse = idx % 2 === 1
        return (
          <Section key={service.slug} id={service.slug} variant={idx % 2 === 0 ? 'surface' : 'canvas'}>
            <Container>
              <div className={`grid gap-12 lg:grid-cols-12 lg:items-start ${reverse ? 'lg:[&>:first-child]:order-2' : ''}`}>
                <div className="lg:col-span-7">
                  <IconCircle>
                    <Icon className="size-5" />
                  </IconCircle>
                  <h2 className="mt-5 text-3xl sm:text-4xl font-bold tracking-tight">
                    {service.title}
                  </h2>
                  <p className="mt-3 text-[var(--color-accent)] font-medium">{service.tagline}</p>
                  <p className="mt-5 text-[var(--color-muted)] text-base sm:text-lg leading-relaxed max-w-2xl">
                    {service.description}
                  </p>
                  <div className="mt-7 grid gap-4 sm:grid-cols-2">
                    <div>
                      <h3 className="text-xs uppercase tracking-[0.16em] text-[var(--color-muted)]">For</h3>
                      <p className="mt-2 text-[var(--color-foreground)]/90">{service.for}</p>
                    </div>
                    <div>
                      <h3 className="text-xs uppercase tracking-[0.16em] text-[var(--color-muted)]">Typical results</h3>
                      <ul className="mt-2 space-y-1.5 text-[var(--color-foreground)]/90">
                        {service.typicalResults.map((r) => (
                          <li key={r}>{r}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="mt-7">
                    <Button href={`/contact?service=${service.slug}`} withArrow>
                      Get a quote
                    </Button>
                  </div>
                </div>
                <div className="lg:col-span-5">
                  <div className="rounded-3xl border border-[var(--color-line)] bg-[var(--color-canvas)]/60 p-7 sm:p-8">
                    <h3 className="text-xs uppercase tracking-[0.18em] text-[var(--color-muted)]">What&apos;s included</h3>
                    <ul className="mt-5 space-y-3">
                      {service.includes.map((inc) => (
                        <li key={inc} className="flex items-start gap-3 text-[var(--color-foreground)]/90">
                          <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-[var(--color-accent)]" />
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Container>
          </Section>
        )
      })}

      <Section variant="surface">
        <Container>
          <div className="max-w-2xl">
            <Badge>FAQ</Badge>
            <h2 className="mt-5 text-3xl sm:text-4xl font-bold tracking-tight">The questions I get asked most.</h2>
          </div>
          <div className="mt-10">
            <FAQ items={faqs} />
          </div>
        </Container>
      </Section>

      <CTABanner />
    </>
  )
}
