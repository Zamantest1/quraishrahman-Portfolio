import type { CaseStudy, CaseStudyResult } from '@/types'

export type PlaceholderCaseStudy = Omit<CaseStudy, 'id' | 'created_at' | 'updated_at'> & {
  results: CaseStudyResult[]
}

export const placeholderCaseStudies: PlaceholderCaseStudy[] = [
  {
    title: 'B2B SaaS technical recovery',
    slug: 'b2b-saas-technical-recovery',
    industry: 'B2B SaaS',
    challenge_html:
      '<p>A mid-market SaaS had hit a 14-month traffic plateau after a CMS migration. Non-brand impressions were down 38% YoY, and 60% of indexed URLs were thin or duplicate templates. Sales attribution from organic search had stalled, and the team was about to invest heavily in paid acquisition to compensate.</p>',
    strategy_html:
      '<p>Step 1: full technical audit (Screaming Frog + Search Console) — 42 critical issues prioritized.</p><p>Step 2: rebuilt the URL architecture, removed 8,000 low-value pages, consolidated duplicate templates and shipped proper canonicals and schema.</p><p>Step 3: rebuilt the priority content hubs around buyer-intent searches, with internal links routed through new pillar pages.</p>',
    results: [
      { label: 'Non-brand clicks', value: '+187%' },
      { label: 'Page-1 keywords', value: '120 new' },
      { label: 'Timeline', value: '6 months' },
    ],
    testimonial:
      'Quraish brought clarity to a problem our team had been stuck on for over a year. The audit alone paid for itself in the first month.',
    testimonial_author: 'Riya Mehta',
    testimonial_company: 'Director of Marketing, Northline Tech',
    cover_image_public_id: null,
    cover_image_url:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    is_published: true,
  },
  {
    title: 'Local service lead engine',
    slug: 'local-service-lead-engine',
    industry: 'Home services',
    challenge_html:
      '<p>A multi-city home services business was buried below aggregators in the Map Pack and getting most leads from paid search at $80+ CPL. Reviews were inconsistent across locations and city landing pages were thin.</p>',
    strategy_html:
      '<p>Rebuilt city × service landing pages with proper unique content, schema and internal links. Tightened Google Business Profile categories, services and posts. Set up a review velocity flow tied to job completion.</p>',
    results: [
      { label: 'Qualified inquiries', value: '3.4x' },
      { label: 'Map Pack visibility', value: '+218%' },
      { label: 'Cost per lead', value: '−62%' },
    ],
    testimonial:
      'Inbound leads from organic search now beat our paid channels. SEO finally feels like real work.',
    testimonial_author: 'David Nguyen',
    testimonial_company: 'Founder, BrightHome Services',
    cover_image_public_id: null,
    cover_image_url:
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80',
    is_published: true,
  },
  {
    title: 'E-commerce category expansion',
    slug: 'ecommerce-category-expansion',
    industry: 'D2C / E-commerce',
    challenge_html:
      '<p>A growing D2C brand had strong product pages but no category-level visibility. Comparison and buyer-guide searches were going entirely to competitors.</p>',
    strategy_html:
      '<p>Rebuilt category copy, metadata, internal linking and buyer guides. Added comparison content and built editorial links to the strongest pages.</p>',
    results: [
      { label: 'Page-1 terms', value: '+96' },
      { label: 'Category organic revenue', value: '+143%' },
      { label: 'Comparison-query visibility', value: '0 → 38%' },
    ],
    testimonial:
      'Our category pages went from invisible to driving the bulk of new-customer revenue.',
    testimonial_author: 'Anika Roy',
    testimonial_company: 'Head of Growth, Lumen Goods',
    cover_image_public_id: null,
    cover_image_url:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    is_published: true,
  },
]
