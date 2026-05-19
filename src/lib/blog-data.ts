import type { BlogPost } from '@/types'

export type PlaceholderBlogPost = Omit<BlogPost, 'id' | 'created_at' | 'updated_at'>

export const placeholderBlogPosts: PlaceholderBlogPost[] = [
  {
    title: 'The technical SEO checklist that still moves rankings in 2026',
    slug: 'technical-seo-checklist-2026',
    excerpt:
      'Crawl depth, Core Web Vitals, structured data and the unglamorous fixes that compound across an entire site.',
    body_html:
      '<p>Technical SEO is not glamorous, but it is what separates sites that compound from sites that plateau. Here are the fixes that, in 2026, still move rankings more than any single content piece.</p><h2>Make every important page reachable in three clicks</h2><p>Crawl depth is one of the most reliable predictors of indexation. If a page lives five hops from the homepage, expect Google to crawl it less often and rank it lower.</p><h2>Fix Core Web Vitals before you write another blog post</h2><p>Largest Contentful Paint above 2.5s, Interaction to Next Paint above 200ms, or Cumulative Layout Shift above 0.1 — these silently cap the ceiling of your rankings, especially on mobile.</p><h2>Stop publishing without schema</h2><p>Article, BreadcrumbList, FAQPage, Product, LocalBusiness — every page type has an appropriate schema. Pages with the right structured data win more SERP real estate.</p>',
    category: 'Technical SEO',
    cover_image_public_id: null,
    cover_image_url:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    is_published: true,
    meta_title: null,
    meta_description: null,
  },
  {
    title: 'Content clusters that actually map to buyer intent',
    slug: 'content-clusters-buyer-intent',
    excerpt: 'A simple framework for turning keyword spreadsheets into a publishing plan your sales team will love.',
    body_html:
      '<p>Most content plans are keyword lists with no model of the buyer behind them. The result is traffic that does not convert.</p><h2>Start with the four buyer stages</h2><p>Awareness, problem, comparison, decision. Every keyword belongs to one of these. Map them before you write a single brief.</p><h2>Every cluster needs a pillar</h2><p>The pillar page targets the broad term. The cluster posts target specific sub-intents. Internal links route from cluster posts up to the pillar.</p><h2>Stop writing for terms with no commercial intent</h2><p>If a page cannot reasonably convert a reader into a lead or a customer, it does not deserve a slot in the editorial calendar — no matter the search volume.</p>',
    category: 'Content strategy',
    cover_image_public_id: null,
    cover_image_url:
      'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=80',
    is_published: true,
    meta_title: null,
    meta_description: null,
  },
  {
    title: 'How service businesses generate leads from local SEO — without ads',
    slug: 'local-seo-leads-without-ads',
    excerpt:
      'Google Business Profile, review velocity, city pages and internal links done in a way that defends rankings long-term.',
    body_html:
      '<p>For service businesses, local SEO is the single highest-ROI marketing channel. It compounds, it is defensible, and it does not get more expensive over time.</p><h2>Your Google Business Profile is your homepage</h2><p>Categories, services, posts, photos and Q&A — most service businesses leave 70% of profile fields blank. Filling them is the cheapest growth lever you have.</p><h2>Reviews are signal and conversion</h2><p>A flow that asks for reviews automatically after a completed job will outperform any review-acquisition campaign you run manually.</p><h2>City landing pages need real content</h2><p>Templated city pages with a swapped-in name rank for nothing. Unique testimonials, project examples and local relevance make the difference.</p>',
    category: 'Local SEO',
    cover_image_public_id: null,
    cover_image_url:
      'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80',
    is_published: true,
    meta_title: null,
    meta_description: null,
  },
]
