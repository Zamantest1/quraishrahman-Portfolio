import type { ReactNode } from 'react'

type Variant = 'canvas' | 'surface'

type Props = {
  children: ReactNode
  className?: string
  variant?: Variant
  id?: string
}

export function Section({ children, className = '', variant = 'canvas', id }: Props) {
  const bg = variant === 'surface' ? 'bg-[var(--color-surface)]/40' : 'bg-transparent'
  return (
    <section
      id={id}
      className={`relative w-full py-16 sm:py-20 lg:py-28 ${bg} ${className}`}
    >
      {children}
    </section>
  )
}
