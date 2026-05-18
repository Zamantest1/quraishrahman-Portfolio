import type { SiteContent } from './types'

export const defaultContent: SiteContent = {
  hero: {
    badge: 'SEO Strategy · Technical Audits · Organic Growth',
    headline: 'Quraish Rahman helps ambitious brands win search visibility.',
    intro:
      'A performance-led SEO expert focused on ranking systems, content architecture, and conversion-ready organic traffic for growing businesses.',
    primaryCta: 'Book an SEO audit',
    secondaryCta: 'View growth work',
    portraitUrl:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=80',
  },
  stats: [
    { value: '214%', label: 'average organic traffic lift' },
    { value: '68+', label: 'technical audits delivered' },
    { value: '4.9/5', label: 'client satisfaction score' },
    { value: '12 yrs', label: 'digital growth experience' },
  ],
  services: [
    {
      title: 'Technical SEO Audits',
      description:
        'Crawl diagnostics, Core Web Vitals, indexation, schema, internal links, and search performance blockers translated into action plans.',
      metrics: '30-day implementation roadmap',
    },
    {
      title: 'Content Growth Systems',
      description:
        'Keyword clustering, topical authority maps, content briefs, and editorial calendars designed to compound qualified organic demand.',
      metrics: 'Topical maps for 6–12 months',
    },
    {
      title: 'Local & Service SEO',
      description:
        'Google Business Profile optimization, service page structures, local landing pages, and trust-building review strategies.',
      metrics: 'Higher map-pack visibility',
    },
    {
      title: 'Analytics & Reporting',
      description:
        'GA4, Search Console, Looker Studio dashboards, conversion tracking, and monthly performance reviews with clear next actions.',
      metrics: 'Executive-ready SEO reporting',
    },
  ],
  caseStudies: [
    {
      title: 'B2B SaaS technical recovery',
      category: 'Technical SEO',
      result: '+187% non-brand clicks',
      description:
        'Resolved crawl waste, duplicate templates, and schema gaps while rebuilding priority content hubs around buyer-intent searches.',
      imageUrl:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80',
    },
    {
      title: 'Local service lead engine',
      category: 'Local SEO',
      result: '3.4x qualified inquiries',
      description:
        'Created city-service landing pages, strengthened review signals, and optimized GBP categories for high-value local search terms.',
      imageUrl:
        'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80',
    },
    {
      title: 'E-commerce category expansion',
      category: 'Content SEO',
      result: '+96 ranking page-one terms',
      description:
        'Rebuilt category copy, metadata, internal links, and buyer guides to capture comparison and commercial product searches.',
      imageUrl:
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80',
    },
  ],
  testimonials: [
    {
      quote:
        'Quraish turned a confusing SEO backlog into a clear growth system. We saw stronger rankings and better leads within one quarter.',
      name: 'Maya Chowdhury',
      role: 'Founder, BrightScale Studio',
    },
    {
      quote:
        'His audits are precise, practical, and commercial. Every recommendation tied back to revenue and measurable visibility.',
      name: 'Nabil Hasan',
      role: 'Marketing Lead, Northline Tech',
    },
  ],
}
