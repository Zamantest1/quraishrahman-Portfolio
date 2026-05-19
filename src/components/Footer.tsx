import Link from 'next/link'
import { Mail } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.5h4v11H3v-11Zm6 0h3.84v1.5h.05a4.2 4.2 0 0 1 3.78-2.08c4.05 0 4.79 2.66 4.79 6.13v5.45h-4v-4.83c0-1.15-.02-2.64-1.6-2.64-1.6 0-1.85 1.25-1.85 2.55v4.92H9V9.5Z"/>
    </svg>
  )
}

function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M18.244 2H21l-6.522 7.452L22 22h-6.828l-4.78-6.262L4.8 22H2.04l6.98-7.978L2 2h6.93l4.33 5.74L18.244 2Zm-2.394 18h1.71L8.286 4H6.51l9.34 16Z"/>
    </svg>
  )
}

const navLinks: Array<{ href: string; label: string }> = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

const year = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="mt-20 sm:mt-28 border-t border-[var(--color-line)] bg-[var(--color-canvas)]">
      <Container className="py-14 sm:py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div>
            <Link href="/" className="font-display text-xl font-bold tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
              <span className="text-[var(--color-foreground)]">Quraish</span>
              <span className="text-[var(--color-accent)]"> Rahman</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm text-[var(--color-muted)] leading-relaxed">
              Independent SEO strategist helping brands grow organic traffic that compounds month over month — through technical foundations, intent-led content, and durable authority.
            </p>
            <div className="mt-6 flex items-center gap-2">
              <a
                href="https://www.linkedin.com/"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex size-9 items-center justify-center rounded-full border border-[var(--color-line)] text-[var(--color-foreground)]/85 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition"
              >
                <LinkedinIcon className="size-4" />
              </a>
              <a
                href="https://x.com/"
                aria-label="Twitter / X"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex size-9 items-center justify-center rounded-full border border-[var(--color-line)] text-[var(--color-foreground)]/85 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition"
              >
                <TwitterIcon className="size-4" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-sm uppercase tracking-[0.18em] text-[var(--color-muted)]">Navigation</h4>
            <ul className="mt-5 grid grid-cols-2 gap-y-3 gap-x-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--color-foreground)]/85 hover:text-[var(--color-accent)] transition"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm uppercase tracking-[0.18em] text-[var(--color-muted)]">Have a project?</h4>
            <p className="mt-5 text-sm text-[var(--color-foreground)]/85 leading-relaxed">
              Available for SEO audits, content strategy and growth retainers from Q3 2026.
            </p>
            <a
              href="mailto:hello@quraishrahman.com"
              className="mt-4 inline-flex items-center gap-2 text-sm text-[var(--color-accent)] hover:underline"
            >
              <Mail className="size-4" /> hello@quraishrahman.com
            </a>
            <div className="mt-6">
              <Button href="/contact" size="sm" withArrow>
                Contact Me
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-[var(--color-line)] flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between text-xs text-[var(--color-muted)]">
          <p>© {year} Quraish Rahman. All rights reserved.</p>
          <p>
            Built by{' '}
            <a
              href="https://shomikujzaman.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="underline-offset-4 hover:underline hover:text-[var(--color-foreground)]"
            >
              Shomik
            </a>
            .
          </p>
        </div>
      </Container>
    </footer>
  )
}
