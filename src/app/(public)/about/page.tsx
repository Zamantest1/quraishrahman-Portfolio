import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { CTABanner } from '@/components/sections/CTABanner'
import { StatsBar } from '@/components/sections/StatsBar'
import { PageImage } from '@/components/PageImage'
import { getSiteContent, getContent } from '@/lib/site-content'
import { aboutPhilosophy, aboutTools } from '@/lib/content-defaults'

export const metadata: Metadata = {
  title: 'About',
  description:
    'About Quraish Rahman — an independent SEO strategist focused on durable organic growth through technical SEO, content strategy, and authority building.',
}

export default async function AboutPage() {
  const content = await getSiteContent()
  return (
    <>
      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <Badge>About</Badge>
              <h1 className="mt-5 text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Senior SEO strategist focused on growth that compounds.
              </h1>
              <p className="mt-5 text-[var(--color-muted)] text-base sm:text-lg leading-relaxed max-w-2xl">
                {getContent(content, 'about_intro')}
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button href="/contact" withArrow>Work with me</Button>
                <Button href="/case-studies" variant="secondary">See case studies</Button>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-[var(--color-line)] bg-[var(--color-surface)]">
                <PageImage
                  publicId={getContent(content, 'about_image_public_id') || null}
                  fallbackUrl={getContent(content, 'about_image_url')}
                  alt="Portrait of Quraish Rahman"
                  width={720}
                  height={900}
                  sizes="(min-width: 1024px) 36vw, 100vw"
                  className="absolute inset-0 size-full object-cover"
                />
                <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/5" aria-hidden />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section variant="surface">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Badge>My story</Badge>
              <h2 className="mt-5 text-3xl sm:text-4xl font-bold tracking-tight">
                Twelve years inside the SEO problem.
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-5 text-[var(--color-foreground)]/85 text-base sm:text-lg leading-relaxed">
              <p>
                I started in SEO before mobile-first indexing was a phrase. Since then I have worked on
                e-commerce, B2B SaaS, marketplaces, agencies and local service businesses — the
                breadth matters because the principles transfer, but the tactics do not.
              </p>
              <p>
                Most of my engagements start where someone else has stalled: a content engine that
                does not rank, a redesign that lost traffic, an agency report that nobody trusts.
                The work is always the same shape — diagnose ruthlessly, prioritize by revenue,
                ship the fixes that compound.
              </p>
              <p>
                I do not have ten clients at once. I work with three to five companies at a time,
                deeply, and treat their SEO like an in-house lead would. That is the only way the
                work stays good.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="max-w-2xl">
            <Badge>How I work</Badge>
            <h2 className="mt-5 text-3xl sm:text-4xl font-bold tracking-tight">
              Three principles I refuse to break.
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {aboutPhilosophy.map((p, i) => (
              <article
                key={p.title}
                className="relative rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)]/70 p-7"
              >
                <div
                  className="text-5xl font-bold text-[var(--color-accent)]/30"
                  style={{ fontFamily: 'var(--font-display)' }}
                  aria-hidden
                >
                  0{i + 1}
                </div>
                <h3 className="mt-2 text-xl font-semibold">{p.title}</h3>
                <p className="mt-3 text-[var(--color-muted)] leading-relaxed">{p.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section variant="surface">
        <Container>
          <div className="max-w-2xl">
            <Badge>Tools</Badge>
            <h2 className="mt-5 text-3xl sm:text-4xl font-bold tracking-tight">The stack I run audits on.</h2>
            <p className="mt-4 text-[var(--color-muted)] text-base sm:text-lg leading-relaxed">
              Tools are not strategy, but the right ones make better decisions cheaper.
            </p>
          </div>
          <ul className="mt-10 flex flex-wrap gap-2">
            {aboutTools.map((t) => (
              <li
                key={t}
                className="rounded-full border border-[var(--color-line)] bg-[var(--color-canvas)]/70 px-4 py-2 text-sm text-[var(--color-foreground)]/85"
              >
                {t}
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <StatsBar />
      <CTABanner
        heading="Want SEO that compounds?"
        subheading="Tell me about your business and your goals. I'll reply with a proposal in 48 hours."
        primaryLabel="Send a brief"
      />
    </>
  )
}
