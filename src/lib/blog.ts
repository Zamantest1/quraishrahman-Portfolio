import 'server-only'
import { getSupabaseServerClient } from '@/lib/supabase/server'
import { placeholderBlogPosts } from '@/lib/blog-data'
import type { BlogPost } from '@/types'

function asBlogPost(p: Omit<BlogPost, 'id' | 'created_at' | 'updated_at'>, index: number): BlogPost {
  const now = new Date(Date.now() - index * 86400000).toISOString()
  return {
    id: `demo-${p.slug}`,
    created_at: now,
    updated_at: now,
    ...p,
  }
}

export async function listPublishedBlogPosts(): Promise<BlogPost[]> {
  const supabase = await getSupabaseServerClient()
  if (!supabase) return placeholderBlogPosts.map(asBlogPost)
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('is_published', true)
    .order('created_at', { ascending: false })
  if (error || !data) return placeholderBlogPosts.map(asBlogPost)
  if ((data as BlogPost[]).length === 0) return placeholderBlogPosts.map(asBlogPost)
  return data as BlogPost[]
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const supabase = await getSupabaseServerClient()
  if (!supabase) {
    const found = placeholderBlogPosts.find((p) => p.slug === slug)
    return found ? asBlogPost(found, 0) : null
  }
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('slug', slug)
    .eq('is_published', true)
    .maybeSingle()
  if (error || !data) {
    const found = placeholderBlogPosts.find((p) => p.slug === slug)
    return found ? asBlogPost(found, 0) : null
  }
  return data as BlogPost
}

export async function listAllBlogSlugs(): Promise<string[]> {
  const supabase = await getSupabaseServerClient()
  if (!supabase) return placeholderBlogPosts.map((p) => p.slug)
  const { data, error } = await supabase
    .from('blog_posts')
    .select('slug')
    .eq('is_published', true)
  if (error || !data) return placeholderBlogPosts.map((p) => p.slug)
  return (data as Array<{ slug: string }>).map((r) => r.slug)
}
