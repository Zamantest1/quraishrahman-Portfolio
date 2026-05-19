import type { Metadata } from 'next'
import { Hero } from '@/components/sections/Hero'
import { StatsBar } from '@/components/sections/StatsBar'
import { ServicesTeaser } from '@/components/sections/ServicesTeaser'
import { FeaturedCaseStudy } from '@/components/sections/FeaturedCaseStudy'
import { Testimonial } from '@/components/sections/Testimonial'
import { CTABanner } from '@/components/sections/CTABanner'
import { getSiteContent, getContent } from '@/lib/site-content'
import { listPublishedCaseStudies } from '@/lib/case-studies'
import { siteMetadata } from '@/lib/metadata'

export const metadata: Metadata = {
  title: siteMetadata.title,
  description: siteMetadata.description,
}

export default async function HomePage() {
  const [content, caseStudies] = await Promise.all([getSiteContent(), listPublishedCaseStudies()])
  const featuredSlug = getContent(content, 'homepage_featured_case_study_slug')
  const featured = caseStudies.find((c) => c.slug === featuredSlug) ?? caseStudies[0]

  return (
    <>
      <Hero
        badge={getContent(content, 'hero_badge')}
        headline={getContent(content, 'hero_headline')}
        subheadline={getContent(content, 'hero_subheadline')}
      />
      <StatsBar />
      <ServicesTeaser />
      {featured ? <FeaturedCaseStudy caseStudy={featured} /> : null}
      <Testimonial
        quote={getContent(content, 'homepage_testimonial_quote')}
        author={getContent(content, 'homepage_testimonial_author')}
        title={getContent(content, 'homepage_testimonial_title')}
      />
      <CTABanner />
    </>
  )
}
