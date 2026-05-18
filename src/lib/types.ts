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

export type SiteContent = {
  hero: {
    badge: string
    headline: string
    intro: string
    primaryCta: string
    secondaryCta: string
    portraitUrl: string
  }
  stats: Array<{
    label: string
    value: string
  }>
  services: Service[]
  caseStudies: CaseStudy[]
  testimonials: Testimonial[]
}
