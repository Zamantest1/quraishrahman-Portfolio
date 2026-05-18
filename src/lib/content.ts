import type { SiteContent } from './types'

export const defaultContent: SiteContent = {
  hero: {
    badge: 'Independent SEO Consultant for service brands and growing teams',
    headline: 'Make organic search your most reliable growth channel.',
    intro:
      'Quraish Rahman builds technical SEO, content strategy, and reporting systems that help businesses rank for the searches their best customers already make.',
    primaryCta: 'Request an SEO audit',
    secondaryCta: 'See the approach',
    portraitUrl:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=80',
  },
  stats: [
    { value: '214%', label: 'sample organic traffic lift' },
    { value: '68+', label: 'audit issues prioritized' },
    { value: '4.9/5', label: 'client review score' },
    { value: '12 yrs', label: 'digital marketing experience' },
  ],
  services: [
    {
      title: 'Technical SEO Audits',
      description:
        'Find indexation issues, slow pages, crawl waste, schema gaps, broken links, and technical blockers that prevent strong pages from ranking.',
      metrics: 'Audit report + 30-day roadmap',
    },
    {
      title: 'Content Growth Systems',
      description:
        'Turn keyword research into topic clusters, service pages, blog briefs, and publishing plans built around buyer intent.',
      metrics: '6-month content plan',
    },
    {
      title: 'Local & Service SEO',
      description:
        'Improve Google Business Profile signals, local landing pages, review trust, and service-area visibility for high-intent searches.',
      metrics: 'Local visibility roadmap',
    },
    {
      title: 'Analytics & Reporting',
      description:
        'Connect GA4, Search Console, and Looker Studio so clients can see rankings, traffic, conversions, and next priorities clearly.',
      metrics: 'Monthly growth dashboard',
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
