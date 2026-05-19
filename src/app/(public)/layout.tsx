import type { ReactNode } from 'react'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { AnalyticsTracker } from '@/components/AnalyticsTracker'

export default function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <AnalyticsTracker />
      <main id="main" className="pt-20">
        {children}
      </main>
      <Footer />
    </>
  )
}
