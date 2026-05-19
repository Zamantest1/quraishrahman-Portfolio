'use client'

import { useActionState } from 'react'
import { CheckCircle2, AlertCircle, Send } from 'lucide-react'
import { submitContact, type ContactState } from '@/app/actions/contact'
import { Button } from '@/components/ui/Button'

const inputBase =
  'w-full rounded-xl border border-[var(--color-line)] bg-[var(--color-canvas)]/70 px-4 py-3 text-base text-[var(--color-foreground)] placeholder:text-[var(--color-muted)]/70 focus:border-[var(--color-accent)] focus:outline-none transition'

const labelBase = 'text-sm font-medium text-[var(--color-foreground)]/85'

const initialState: ContactState = { status: 'idle' }

const budgetOptions = ['Under $500', '$500–$1.5k', '$1.5k–$3k', '$3k+']

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContact, initialState)

  if (state.status === 'success') {
    return (
      <div className="rounded-3xl border border-[var(--color-accent)]/40 bg-[var(--color-accent-tint)] p-8 text-[var(--color-foreground)]">
        <div className="flex items-center gap-3">
          <CheckCircle2 className="size-6 text-[var(--color-accent)]" />
          <h3 className="text-xl font-semibold">Thanks — message received.</h3>
        </div>
        <p className="mt-3 text-[var(--color-foreground)]/85">
          I&apos;ll review your brief and reply within 48 hours. If you don&apos;t hear back, ping me at
          {' '}<a className="text-[var(--color-accent)] underline" href="mailto:hello@quraishrahman.com">hello@quraishrahman.com</a>.
        </p>
      </div>
    )
  }

  return (
    <form action={formAction} className="space-y-5">
      {state.status === 'error' ? (
        <div className="flex items-start gap-3 rounded-2xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-200">
          <AlertCircle className="mt-0.5 size-4 shrink-0" />
          <span>{state.message}</span>
        </div>
      ) : null}

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="full_name" className={labelBase}>
            Full name <span className="text-[var(--color-accent)]">*</span>
          </label>
          <input id="full_name" name="full_name" type="text" required className={inputBase} placeholder="Jane Doe" />
          {state.status === 'error' && state.fieldErrors?.full_name ? (
            <p className="text-xs text-red-300">{state.fieldErrors.full_name[0]}</p>
          ) : null}
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className={labelBase}>
            Email <span className="text-[var(--color-accent)]">*</span>
          </label>
          <input id="email" name="email" type="email" required className={inputBase} placeholder="you@company.com" />
          {state.status === 'error' && state.fieldErrors?.email ? (
            <p className="text-xs text-red-300">{state.fieldErrors.email[0]}</p>
          ) : null}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="website_url" className={labelBase}>Website URL <span className="text-[var(--color-muted)]">(optional)</span></label>
          <input id="website_url" name="website_url" type="url" className={inputBase} placeholder="https://yoursite.com" />
        </div>
        <div className="space-y-2">
          <label htmlFor="budget_range" className={labelBase}>Monthly budget <span className="text-[var(--color-muted)]">(optional)</span></label>
          <select id="budget_range" name="budget_range" className={inputBase} defaultValue="">
            <option value="">Choose a range</option>
            {budgetOptions.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className={labelBase}>
          What do you want SEO to do for you? <span className="text-[var(--color-accent)]">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className={`${inputBase} resize-y leading-relaxed`}
          placeholder="A few sentences about the business, the goal, and what's been tried so far."
        />
        {state.status === 'error' && state.fieldErrors?.message ? (
          <p className="text-xs text-red-300">{state.fieldErrors.message[0]}</p>
        ) : null}
      </div>

      <div className="pt-2">
        <Button type="submit" size="lg" disabled={isPending} className="w-full sm:w-auto">
          {isPending ? 'Sending…' : (
            <>
              <Send className="size-4" /> Send message
            </>
          )}
        </Button>
      </div>
    </form>
  )
}
