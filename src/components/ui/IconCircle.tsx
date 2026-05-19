import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: string
}

export function IconCircle({ children, className = '' }: Props) {
  return (
    <div
      className={`inline-flex size-12 items-center justify-center rounded-full bg-[var(--color-accent-tint)] text-[var(--color-accent)] ring-1 ring-[var(--color-accent)]/30 ${className}`}
    >
      {children}
    </div>
  )
}
