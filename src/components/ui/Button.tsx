'use client'

import Link from 'next/link'
import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import { ArrowRight } from 'lucide-react'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

const baseClasses =
  'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition will-change-transform whitespace-nowrap'

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-hover)] hover:shadow-[0_0_24px_rgba(59,130,246,0.45)] hover:-translate-y-0.5',
  secondary:
    'border border-[var(--color-accent)] text-[var(--color-accent)] hover:bg-[var(--color-accent-tint)] hover:-translate-y-0.5',
  ghost:
    'text-[var(--color-foreground)]/80 hover:text-[var(--color-accent)] hover:bg-[var(--color-accent-tint)]',
}

const sizeClasses: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-7 py-3.5 text-base',
}

type CommonProps = {
  variant?: Variant
  size?: Size
  withArrow?: boolean
  children: ReactNode
  className?: string
}

type LinkButtonProps = CommonProps & {
  href: string
  type?: never
  onClick?: never
  disabled?: never
}

type ActionButtonProps = CommonProps &
  ComponentPropsWithoutRef<'button'> & {
    href?: never
  }

export function Button(props: LinkButtonProps | ActionButtonProps) {
  const { variant = 'primary', size = 'md', withArrow = false, className = '', children } = props
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`
  const content = (
    <>
      <span>{children}</span>
      {withArrow ? <ArrowRight className="size-4" /> : null}
    </>
  )
  if ('href' in props && props.href) {
    return (
      <Link href={props.href} className={classes}>
        {content}
      </Link>
    )
  }
  const { variant: _v, size: _s, withArrow: _a, className: _c, children: _ch, href: _h, ...rest } = props as ActionButtonProps
  return (
    <button className={classes} {...rest}>
      {content}
    </button>
  )
}
