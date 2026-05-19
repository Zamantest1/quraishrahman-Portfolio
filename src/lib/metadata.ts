import { env } from '@/lib/env'

export const siteMetadata = {
  name: 'Quraish Rahman',
  title: 'Quraish Rahman | SEO Expert & Strategist',
  description:
    'Quraish Rahman is an independent SEO strategist helping brands rank on Google, grow organic traffic, and turn search into a reliable growth channel.',
  url: env.siteUrl,
  ogImage: '/og-image.png',
  twitterHandle: '@quraishrahman',
}

export type SiteMetadata = typeof siteMetadata
