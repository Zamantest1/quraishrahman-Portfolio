import { createClient } from '@supabase/supabase-js'
import type { Lead, SiteContent } from './types'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey)

export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null

export async function fetchSiteContent() {
  if (!supabase) {
    return null
  }

  const { data, error } = await supabase
    .from('site_content')
    .select('content')
    .eq('slug', 'quraish-rahman')
    .maybeSingle()

  if (error) {
    throw error
  }

  return data?.content as SiteContent | null
}

export async function saveSiteContent(content: SiteContent) {
  if (!supabase) {
    return null
  }

  const { error } = await supabase.from('site_content').upsert({
    slug: 'quraish-rahman',
    content,
    updated_at: new Date().toISOString(),
  })

  if (error) {
    throw error
  }

  return content
}

export async function saveLead(lead: Lead) {
  if (!supabase) {
    return null
  }

  const { error } = await supabase.from('leads').insert({
    name: lead.name,
    email: lead.email,
    company: lead.company,
    goal: lead.goal,
  })

  if (error) {
    throw error
  }

  return lead
}
