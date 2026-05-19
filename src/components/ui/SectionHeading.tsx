'use client'

import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { Badge } from './Badge'

type Props = {
  eyebrow?: string
  title: ReactNode
  subtitle?: ReactNode
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeading({ eyebrow, title, subtitle, align = 'left', className = '' }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className={`${align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'} ${className}`}
    >
      {eyebrow ? <Badge className="mb-5">{eyebrow}</Badge> : null}
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">{title}</h2>
      {subtitle ? (
        <p className="mt-4 text-[var(--color-muted)] text-base sm:text-lg leading-relaxed">{subtitle}</p>
      ) : null}
    </motion.div>
  )
}
