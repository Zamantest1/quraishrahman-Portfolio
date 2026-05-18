export type Service = {
  title: string
  description: string
  metrics: string
}

export type CaseStudy = {
  title: string
  category: string
  result: string
  description: string
  imageUrl: string
}

export type Testimonial = {
  quote: string
  name: string
  role: string
}

export type Lead = {
  name: string
  email: string
  company: string
  goal: string
}

export type ProcessStep = {
  title: string
  description: string
}

export type InsightCard = {
  title: string
  description: string
}

export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  category: string
  readMinutes: number
  publishedAt: string
  author: string
  coverUrl: string
}

export type SiteContent = {
  hero: {
    badge: string
    headline: string
    intro: string
    primaryCta: string
    secondaryCta: string
    portraitUrl: string
    metricLabel: string
    metricValue: string
    auditNote: string
  }
  trustSignals: string[]
  stats: Array<{
    label: string
    value: string
  }>
  insightCards: InsightCard[]
  services: Service[]
  caseStudies: CaseStudy[]
  caseFeature: {
    eyebrow: string
    title: string
    description: string
  }
  processSteps: ProcessStep[]
  blog: BlogPost[]
  testimonials: Testimonial[]
  contact: {
    eyebrow: string
    headline: string
    description: string
    submitLabel: string
  }
  footer: {
    name: string
    tagline: string
    email: string
  }
}
