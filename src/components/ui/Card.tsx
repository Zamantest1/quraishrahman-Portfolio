'use client'

import type { ReactNode } from 'react'
import { motion } from 'framer-motion'

type Props = {
  children: ReactNode
  className?: string
  hoverable?: boolean
  as?: 'div' | 'article' | 'section'
}

export function Card({ children, className = '', hoverable = true, as = 'div' }: Props) {
  const cls = `relative rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)]/80 backdrop-blur-sm p-6 sm:p-8 transition ${
    hoverable
      ? 'hover:border-[var(--color-accent)]/40 hover:shadow-[var(--shadow-glow)]'
      : ''
  } ${className}`
  if (!hoverable) {
    if (as === 'article') return <article className={cls}>{children}</article>
    if (as === 'section') return <section className={cls}>{children}</section>
    return <div className={cls}>{children}</div>
  }
  const MotionTag = as === 'article' ? motion.article : as === 'section' ? motion.section : motion.div
  return (
    <MotionTag whileHover={{ y: -4 }} transition={{ duration: 0.2, ease: 'easeOut' }} className={cls}>
      {children}
    </MotionTag>
  )
}
