import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: string
  tone?: 'accent' | 'neutral'
}

export function Badge({ children, className = '', tone = 'accent' }: Props) {
  const toneClasses =
    tone === 'accent'
      ? 'border-[var(--color-accent)]/40 text-[var(--color-accent)] bg-[var(--color-accent-tint)]'
      : 'border-[var(--color-line-strong)] text-[var(--color-foreground)]/80 bg-[var(--color-surface)]/60'
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.14em] ${toneClasses} ${className}`}
    >
      {children}
    </span>
  )
}
