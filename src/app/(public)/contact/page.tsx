import type { Metadata } from 'next'
import { Clock, Mail, MapPin } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Badge } from '@/components/ui/Badge'
import { ContactForm } from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Send Quraish Rahman a project brief. SEO audits, content strategy, link building, local SEO and senior SEO retainers — replies within 48 hours.',
}

const projectTypes = [
  'Technical SEO audit',
  'Content & keyword strategy',
  'Link building / digital PR',
  'Local SEO',
  'Senior SEO retainer',
  'Migration / recovery',
]

export default function ContactPage() {
  return (
    <Section>
      <Container>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Badge>Contact</Badge>
            <h1 className="mt-5 text-balance text-4xl font-bold tracking-tight sm:text-5xl">
              Tell me what you want SEO to do next.
            </h1>
            <p className="mt-5 text-[var(--color-muted)] text-base sm:text-lg leading-relaxed">
              Send a quick brief — site, market, growth goal. I&apos;ll review it personally and reply within 48 hours with a recommended next step.
            </p>
            <div className="mt-9 space-y-5 text-sm">
              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 size-5 text-[var(--color-accent)]" />
                <div>
                  <div className="font-semibold">48-hour response time</div>
                  <p className="mt-0.5 text-[var(--color-muted)] leading-relaxed">
                    I read every message personally and reply with a concrete proposal — no canned responses.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 size-5 text-[var(--color-accent)]" />
                <div>
                  <div className="font-semibold">Or email directly</div>
                  <a
                    href="mailto:hello@quraishrahman.com"
                    className="mt-0.5 inline-block text-[var(--color-accent)] hover:underline"
                  >
                    hello@quraishrahman.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-5 text-[var(--color-accent)]" />
                <div>
                  <div className="font-semibold">Working remotely</div>
                  <p className="mt-0.5 text-[var(--color-muted)] leading-relaxed">
                    Based in Dhaka. Working with founders and marketing leads worldwide.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-10">
              <h3 className="text-xs uppercase tracking-[0.16em] text-[var(--color-muted)]">Project types</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {projectTypes.map((p) => (
                  <li
                    key={p}
                    className="rounded-full border border-[var(--color-line)] bg-[var(--color-surface)]/70 px-3 py-1.5 text-xs text-[var(--color-foreground)]/85"
                  >
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-[var(--color-line)] bg-[var(--color-surface)]/80 p-6 sm:p-8 lg:p-10">
              <ContactForm />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
