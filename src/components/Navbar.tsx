'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'

const navLinks: Array<{ href: string; label: string }> = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

export function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'backdrop-blur-xl bg-[rgba(8,12,20,0.78)] border-b border-[var(--color-line)]/70'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 sm:px-6 h-16 sm:h-20">
        <Link href="/" className="font-display text-lg sm:text-xl font-bold tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
          <span className="text-[var(--color-foreground)]">Quraish</span>
          <span className="text-[var(--color-accent)]"> Rahman</span>
        </Link>
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const active = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href)
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-3 py-2 text-sm font-medium transition ${
                  active
                    ? 'text-[var(--color-accent)]'
                    : 'text-[var(--color-foreground)]/80 hover:text-[var(--color-foreground)]'
                }`}
              >
                {link.label}
                {active ? (
                  <span className="absolute left-3 right-3 -bottom-0.5 h-0.5 rounded-full bg-[var(--color-accent)]" />
                ) : null}
              </Link>
            )
          })}
        </nav>
        <div className="hidden lg:block">
          <Button href="/contact" size="sm">Get a Free Audit</Button>
        </div>
        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="lg:hidden inline-flex size-10 items-center justify-center rounded-full border border-[var(--color-line)] text-[var(--color-foreground)] hover:border-[var(--color-accent)]/50"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>
      <AnimatePresence>
        {open ? (
          <motion.div
            key="mobile-menu"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="lg:hidden fixed inset-y-0 right-0 z-40 w-full max-w-sm bg-[var(--color-canvas)] border-l border-[var(--color-line)] pt-20 px-6 pb-10 overflow-y-auto"
          >
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const active = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href)
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-4 py-3 rounded-xl text-base font-medium ${
                      active
                        ? 'text-[var(--color-accent)] bg-[var(--color-accent-tint)]'
                        : 'text-[var(--color-foreground)]/85 hover:bg-[var(--color-surface)]'
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              })}
              <div className="mt-6">
                <Button href="/contact" className="w-full">Get a Free Audit</Button>
              </div>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
