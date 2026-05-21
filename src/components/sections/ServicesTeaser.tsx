'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Check, Search, FileText, Link as LinkIcon } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Card } from '@/components/ui/Card'
import { IconCircle } from '@/components/ui/IconCircle'
import { homepageServices } from '@/lib/content-defaults'

const iconMap = {
  Search,
  FileText,
  Link: LinkIcon,
} as const

export function ServicesTeaser() {
  return (
    <Section>
      <Container>
        <SectionHeading
          align="center"
          eyebrow="What I do"
          title={<>SEO that doesn&apos;t plateau.</>}
          subtitle="Three core services that work as a system — technical foundations, content that maps to intent, and authority that compounds."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {homepageServices.map((service, idx) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap] ?? Search
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
              >
                <Card className="group h-full flex flex-col">
                  <div
                    className="pointer-events-none absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-accent)]/50 to-transparent opacity-0 transition group-hover:opacity-100"
                    aria-hidden
                  />
                  <IconCircle>
                    <Icon className="size-5" />
                  </IconCircle>
                  <h3 className="mt-5 text-xl font-semibold">{service.title}</h3>
                  <p className="mt-3 text-[var(--color-muted)] leading-relaxed">{service.description}</p>
                  <ul className="mt-5 space-y-2 text-sm">
                    {service.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-start gap-2 text-[var(--color-foreground)]/85"
                      >
                        <Check className="mt-0.5 size-4 shrink-0 text-[var(--color-accent)]" aria-hidden />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-6">
                    <Link
                      href={`/services#${service.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-accent)] hover:underline underline-offset-4"
                    >
                      Learn more <ArrowRight className="size-4 transition group-hover:translate-x-1" />
                    </Link>
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}
