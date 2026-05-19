export type ServiceDefinition = {
  slug: string
  title: string
  tagline: string
  description: string
  includes: string[]
  for: string
  typicalResults: string[]
  icon: string
}

export const services: ServiceDefinition[] = [
  {
    slug: 'technical-seo-audit',
    title: 'Technical SEO Audit',
    tagline: 'Find every blocker between your pages and page one.',
    description:
      'A deep, prioritized audit covering crawlability, indexation, site architecture, Core Web Vitals, structured data, internal linking and on-page signals — then a clear 30/60/90-day roadmap to fix what matters first.',
    includes: [
      'Crawl + indexation audit (Screaming Frog + Search Console)',
      'Core Web Vitals + page-experience review',
      'Site architecture + internal linking analysis',
      'Schema and structured data review',
      'On-page / metadata audit',
      '30/60/90-day prioritized roadmap',
    ],
    for: 'Sites that plateaued, post-migration drops, or teams about to invest heavily in content.',
    typicalResults: [
      '+30–80% non-brand impressions in 90 days',
      '20–60 critical technical fixes prioritized',
      'Clear ownership of every fix (dev / content / SEO)',
    ],
    icon: 'Search',
  },
  {
    slug: 'content-keyword-strategy',
    title: 'Content & Keyword Strategy',
    tagline: 'A publishing plan mapped to how your buyers actually search.',
    description:
      'Keyword research grouped by buyer intent, mapped to topic clusters and pillar pages, with detailed briefs your writers (or mine) can execute on without ambiguity.',
    includes: [
      'Full keyword universe + intent classification',
      'Topic clusters + pillar architecture',
      'Content gap analysis vs. competitors',
      'Detailed editorial briefs',
      '6-month publishing calendar',
    ],
    for: 'Teams that have a writer or agency but lack direction on what to publish next.',
    typicalResults: [
      '3–10x non-brand traffic over 12 months',
      'Sustained Page 1 placements on commercial-intent terms',
      'Sales team using the content as inbound enablement',
    ],
    icon: 'FileText',
  },
  {
    slug: 'link-building-authority',
    title: 'Link Building & Authority',
    tagline: 'Earn the citations that actually move rankings.',
    description:
      'Editorial, digital PR and partnership-driven link building focused on relevance and topical authority — not directories or spammy farms.',
    includes: [
      'Backlink + competitor link gap analysis',
      'Linkable asset identification (data, tools, guides)',
      'Outreach + digital PR pitches',
      'Internal authority routing across the site',
    ],
    for: 'Sites that have great content but rank short of competitors with stronger profiles.',
    typicalResults: [
      '15–40 relevant, editorial links per quarter',
      'Domain Rating growth in the +5 to +15 range annually',
      'Featured mentions in industry publications',
    ],
    icon: 'Link',
  },
  {
    slug: 'local-seo',
    title: 'Local SEO',
    tagline: 'Be the obvious choice in every city you serve.',
    description:
      'Google Business Profile optimization, review velocity, local landing pages and citation cleanup so high-intent local searchers find you first.',
    includes: [
      'Google Business Profile audit + optimization',
      'Local landing pages (city + service)',
      'Review acquisition + reputation flow',
      'Citation cleanup + NAP consistency',
      'Local schema markup',
    ],
    for: 'Service businesses, multi-location brands, and regional retailers.',
    typicalResults: [
      '2–5x calls and form fills from local search',
      'Map Pack placements across target cities',
      'Improved review velocity + ratings',
    ],
    icon: 'MapPin',
  },
  {
    slug: 'seo-consulting',
    title: 'SEO Consulting / Retainer',
    tagline: 'A senior SEO partner embedded with your team.',
    description:
      'A monthly retainer covering strategy, technical guidance, content review, reporting, and a clear next-quarter roadmap — for teams that want senior SEO direction without hiring full-time.',
    includes: [
      'Weekly working sessions with founders / marketing lead',
      'Monthly strategy + reporting',
      'On-call review of all new content + dev releases',
      'Quarterly roadmap + OKRs',
    ],
    for: 'Companies past the audit stage that want a continuous SEO partner.',
    typicalResults: [
      'Sustained YoY organic growth',
      'SEO embedded into product, content and dev releases',
      'A team that no longer ships changes that hurt rankings',
    ],
    icon: 'Compass',
  },
]

export const faqs: Array<{ question: string; answer: string }> = [
  {
    question: 'How long until I see results?',
    answer:
      'Technical wins can show up in Search Console within a few weeks. Meaningful content + authority wins typically compound over 3–6 months. SEO is not a quick fix — it is a system that gets cheaper and more defensible the longer you invest.',
  },
  {
    question: 'Do you guarantee rankings?',
    answer:
      'No serious SEO does, and any one who does is lying. I do commit to a transparent process, measurable leading indicators (crawl health, impressions, click share, ranked URLs) and clear monthly reporting.',
  },
  {
    question: 'Do you work with in-house teams?',
    answer:
      'Yes — most of my retainer clients have an internal marketing lead or content writer. I work with them, not around them, and a big part of the engagement is making the in-house team measurably better at SEO.',
  },
  {
    question: 'What does it cost?',
    answer:
      'Technical audits start at a fixed scope. Strategy, content and retainer engagements are scoped to the goal. Send a brief via the contact form and I will reply with a proposal within 48 hours.',
  },
]
