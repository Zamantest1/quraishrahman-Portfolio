export type Lead = {
  id: string
  created_at: string
  full_name: string
  email: string
  website_url: string | null
  budget_range: string | null
  message: string
  status: 'new' | 'read' | 'replied' | 'archived'
}

export type BlogPost = {
  id: string
  created_at: string
  updated_at: string
  title: string
  slug: string
  excerpt: string | null
  body_html: string | null
  category: string | null
  cover_image_public_id: string | null
  cover_image_url: string | null
  is_published: boolean
  meta_title: string | null
  meta_description: string | null
}

export type CaseStudyResult = {
  label: string
  value: string
}

export type CaseStudy = {
  id: string
  created_at: string
  updated_at: string
  title: string
  slug: string
  industry: string | null
  challenge_html: string | null
  strategy_html: string | null
  results: CaseStudyResult[]
  testimonial: string | null
  testimonial_author: string | null
  testimonial_company: string | null
  cover_image_public_id: string | null
  cover_image_url: string | null
  is_published: boolean
}

export type PageView = {
  id: string
  created_at: string
  page_path: string
  visitor_id: string | null
  referrer: string | null
  user_agent: string | null
}

export type Visitor = {
  visitor_id: string
  first_seen: string
  last_seen: string
  visit_count: number
}

export type ActiveSession = {
  visitor_id: string
  last_seen: string
  current_page: string | null
}

export type SiteContentEntry = {
  key: string
  value: string
  updated_at: string
}

export type SiteContentMap = Record<string, string>

export type ContentKey =
  | 'hero_headline'
  | 'hero_subheadline'
  | 'hero_badge'
  | 'hero_image_public_id'
  | 'hero_image_url'
  | 'about_intro'
  | 'about_image_public_id'
  | 'about_image_url'
  | 'services_intro'
  | 'homepage_testimonial_quote'
  | 'homepage_testimonial_author'
  | 'homepage_testimonial_title'
  | 'homepage_featured_case_study_slug'
  | 'og_image_public_id'
  | 'og_image_url'
