import type { ContentKey } from '@/types'

export const contentDefaults: Record<ContentKey, string> = {
  hero_headline: 'I Help Brands Get Found on Google — and Stay There.',
  hero_subheadline:
    'SEO strategist helping businesses grow organic traffic that compounds month over month.',
  hero_badge: '✦ SEO Strategist & Growth Consultant',
  hero_image_public_id: '',
  hero_image_url:
    'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=80',
  about_intro:
    'I work with founders and marketing leads who want SEO to be a reliable revenue channel — not a guessing game. My focus is the work that actually moves rankings: solid technical foundations, search-intent-led content, and authority signals that compound.',
  about_image_public_id: '',
  about_image_url:
    'https://images.unsplash.com/photo-1573497019418-b400bb3ab074?auto=format&fit=crop&w=900&q=80',
  services_intro:
    'End-to-end SEO strategy — from technical foundations to content and authority. Every engagement is scoped to your stage, market and goal.',
  homepage_testimonial_quote:
    'Quraish turned a confusing SEO backlog into a clear growth system. We saw stronger rankings and better-qualified leads inside one quarter.',
  homepage_testimonial_author: 'Maya Chowdhury',
  homepage_testimonial_title: 'Founder, BrightScale Studio',
  homepage_featured_case_study_slug: 'b2b-saas-technical-recovery',
  og_image_public_id: '',
  og_image_url: '',
}

export const homepageStatsDisplay: Array<{ display: string; label: string; rawValue: number; suffix?: string; prefix?: string }> = [
  { display: '2.3M+', label: 'Organic Clicks Generated', rawValue: 2300000, suffix: '+' },
  { display: '47', label: 'Brands Ranked', rawValue: 47 },
  { display: '120+', label: 'Page 1 Keywords', rawValue: 120, suffix: '+' },
  { display: '5+', label: 'Years of Experience', rawValue: 5, suffix: '+' },
]

export const homepageServices = [
  {
    title: 'Technical SEO Audits',
    description: 'Find indexation issues, slow pages, crawl waste and schema gaps that hold strong pages back.',
    icon: 'Search',
    slug: 'technical-seo-audit',
    bullets: [
      'Crawl + indexation audit',
      'Core Web Vitals review',
      'Prioritized 30/60/90 roadmap',
    ],
  },
  {
    title: 'Content & Keyword Strategy',
    description: 'Turn keyword research into intent-mapped topic clusters and a publishing plan your team can ship.',
    icon: 'FileText',
    slug: 'content-keyword-strategy',
    bullets: [
      'Keyword universe + intent map',
      'Topic clusters & pillars',
      '6-month editorial calendar',
    ],
  },
  {
    title: 'Link Building & Authority',
    description: 'Earn relevant, high-quality links and editorial mentions that compound your topical authority.',
    icon: 'Link',
    slug: 'link-building-authority',
    bullets: [
      'Editorial outreach & digital PR',
      'Linkable asset identification',
      'Internal authority routing',
    ],
  },
] as const

export const aboutPhilosophy = [
  {
    title: 'Diagnose before prescribing',
    description:
      'Every engagement starts with a deep audit — search intent, technical health, content quality, conversion paths. No work begins until the diagnosis is solid.',
  },
  {
    title: 'Prioritise by business impact',
    description:
      'Rankings, traffic and links are means, not ends. Every fix is scored against the revenue it unlocks. The cheap, high-impact wins ship first.',
  },
  {
    title: 'Compound, do not chase',
    description:
      'Defensible wins beat short-term spikes. The system is built so rankings hold, content compounds, and you spend less on the same channel over time.',
  },
]

export const aboutTools = [
  'Google Search Console',
  'Ahrefs',
  'SEMrush',
  'Screaming Frog',
  'Google Analytics 4',
  'Looker Studio',
  'Sitebulb',
  'Surfer SEO',
]

export const homepageStats: Array<{ value: string; label: string }> = homepageStatsDisplay.map((s) => ({
  value: s.display,
  label: s.label,
}))
