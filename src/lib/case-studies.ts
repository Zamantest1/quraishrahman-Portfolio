import 'server-only'
import { getSupabaseServerClient } from '@/lib/supabase/server'
import { placeholderCaseStudies } from '@/lib/case-studies-data'
import type { CaseStudy } from '@/types'

function asCaseStudy(p: Omit<CaseStudy, 'id' | 'created_at' | 'updated_at'>, index: number): CaseStudy {
  const now = new Date(Date.now() - index * 86400000).toISOString()
  return {
    id: `demo-${p.slug}`,
    created_at: now,
    updated_at: now,
    ...p,
  }
}

export async function listPublishedCaseStudies(): Promise<CaseStudy[]> {
  const supabase = await getSupabaseServerClient()
  if (!supabase) return placeholderCaseStudies.map(asCaseStudy)
  const { data, error } = await supabase
    .from('case_studies')
    .select('*')
    .eq('is_published', true)
    .order('created_at', { ascending: false })
  if (error || !data) return placeholderCaseStudies.map(asCaseStudy)
  if ((data as CaseStudy[]).length === 0) return placeholderCaseStudies.map(asCaseStudy)
  return data as CaseStudy[]
}

export async function getCaseStudyBySlug(slug: string): Promise<CaseStudy | null> {
  const supabase = await getSupabaseServerClient()
  if (!supabase) {
    const found = placeholderCaseStudies.find((p) => p.slug === slug)
    return found ? asCaseStudy(found, 0) : null
  }
  const { data, error } = await supabase
    .from('case_studies')
    .select('*')
    .eq('slug', slug)
    .eq('is_published', true)
    .maybeSingle()
  if (error || !data) {
    const found = placeholderCaseStudies.find((p) => p.slug === slug)
    return found ? asCaseStudy(found, 0) : null
  }
  return data as CaseStudy
}

export async function listAllCaseStudySlugs(): Promise<string[]> {
  const supabase = await getSupabaseServerClient()
  if (!supabase) return placeholderCaseStudies.map((p) => p.slug)
  const { data, error } = await supabase
    .from('case_studies')
    .select('slug')
    .eq('is_published', true)
  if (error || !data) return placeholderCaseStudies.map((p) => p.slug)
  return (data as Array<{ slug: string }>).map((r) => r.slug)
}
