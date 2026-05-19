'use server'

import { z } from 'zod'
import { getSupabaseAdminClient } from '@/lib/supabase/server'

const ContactSchema = z.object({
  full_name: z.string().min(2, 'Please enter your full name.').max(120),
  email: z.string().email('Please enter a valid email address.'),
  website_url: z.string().optional().or(z.literal('')),
  budget_range: z.enum(['Under $500', '$500–$1.5k', '$1.5k–$3k', '$3k+', '']).optional(),
  message: z.string().min(10, 'Please share at least a sentence about your project.').max(4000),
})

export type ContactState =
  | { status: 'idle' }
  | { status: 'success' }
  | { status: 'error'; message: string; fieldErrors?: Record<string, string[]> }

export async function submitContact(_prev: ContactState, formData: FormData): Promise<ContactState> {
  const raw = {
    full_name: String(formData.get('full_name') ?? ''),
    email: String(formData.get('email') ?? ''),
    website_url: String(formData.get('website_url') ?? ''),
    budget_range: String(formData.get('budget_range') ?? ''),
    message: String(formData.get('message') ?? ''),
  }
  const parsed = ContactSchema.safeParse(raw)
  if (!parsed.success) {
    return {
      status: 'error',
      message: 'Please correct the highlighted fields.',
      fieldErrors: parsed.error.flatten().fieldErrors as Record<string, string[]>,
    }
  }
  const supabase = getSupabaseAdminClient()
  if (!supabase) {
    return {
      status: 'error',
      message:
        'Supabase is not configured yet. Add the SUPABASE_SERVICE_ROLE_KEY env var in Vercel and redeploy.',
    }
  }
  const { error } = await supabase.from('leads').insert({
    full_name: parsed.data.full_name,
    email: parsed.data.email,
    website_url: parsed.data.website_url || null,
    budget_range: parsed.data.budget_range || null,
    message: parsed.data.message,
    status: 'new',
  })
  if (error) {
    return {
      status: 'error',
      message: `Could not save your message: ${error.message}. Please try again.`,
    }
  }
  return { status: 'success' }
}
