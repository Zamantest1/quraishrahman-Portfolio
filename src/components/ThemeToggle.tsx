'use client'

import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '@/components/ThemeProvider'

type Props = {
  className?: string
}

export function ThemeToggle({ className = '' }: Props) {
  const { theme, toggleTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isLight = theme === 'light'
  // Until mounted, render a stable placeholder icon so server + client markup
  // match. The inline bootstrap script already set the right palette.
  const label = mounted ? (isLight ? 'Switch to dark theme' : 'Switch to light theme') : 'Toggle theme'

  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      onClick={mounted ? toggleTheme : undefined}
      className={`relative inline-flex size-10 items-center justify-center rounded-full border border-[var(--color-line)] text-[var(--color-foreground)]/85 hover:border-[var(--color-accent)]/50 hover:text-[var(--color-accent)] transition ${className}`}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={mounted ? (isLight ? 'sun' : 'moon') : 'placeholder'}
          initial={{ opacity: 0, rotate: -90, scale: 0.6 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 90, scale: 0.6 }}
          transition={{ duration: 0.18, ease: 'easeOut' }}
          className="inline-flex"
        >
          {isLight ? <Sun className="size-4" /> : <Moon className="size-4" />}
        </motion.span>
      </AnimatePresence>
    </button>
  )
}
