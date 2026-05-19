import 'server-only'
import { getSupabaseServerClient } from '@/lib/supabase/server'
import { contentDefaults } from '@/lib/content-defaults'
import type { ContentKey, SiteContentMap } from '@/types'

export async function getSiteContent(): Promise<SiteContentMap> {
  const supabase = await getSupabaseServerClient()
  const fallback: SiteContentMap = { ...contentDefaults }
  if (!supabase) return fallback
  try {
    const { data, error } = await supabase.from('site_content').select('key,value')
    if (error || !data) return fallback
    const out: SiteContentMap = { ...fallback }
    for (const row of data as Array<{ key: string; value: string }>) {
      out[row.key] = row.value
    }
    return out
  } catch {
    return fallback
  }
}

export function getContent(content: SiteContentMap, key: ContentKey): string {
  return content[key] ?? contentDefaults[key] ?? ''
}
