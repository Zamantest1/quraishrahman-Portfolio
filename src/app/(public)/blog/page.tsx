import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Calendar } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Badge } from '@/components/ui/Badge'
import { CTABanner } from '@/components/sections/CTABanner'
import { PageImage } from '@/components/PageImage'
import { listPublishedBlogPosts } from '@/lib/blog'
import { formatDate } from '@/lib/format'

export const metadata: Metadata = {
  title: 'Insights',
  description:
    'Field notes on technical SEO, content strategy, link building and the work that actually grows organic traffic.',
}

export default async function BlogPage() {
  const posts = await listPublishedBlogPosts()
  return (
    <>
      <Section>
        <Container className="text-center">
          <Badge>Insights</Badge>
          <h1 className="mt-5 text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mx-auto max-w-3xl">
            Field notes from twelve years of SEO work.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-[var(--color-muted)] text-base sm:text-lg leading-relaxed">
            Audits, tactics, frameworks and lessons from real engagements — written for founders and marketing leads, not other SEOs.
          </p>
        </Container>
      </Section>

      <Section className="pt-0 sm:pt-0 lg:pt-0">
        <Container>
          {posts.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-[var(--color-line)] p-16 text-center text-[var(--color-muted)]">
              No posts yet — check back soon.
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="group relative flex flex-col overflow-hidden rounded-3xl border border-[var(--color-line)] bg-[var(--color-surface)]/70 transition hover:border-[var(--color-accent)]/40 hover:shadow-[var(--shadow-glow)]"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <PageImage
                      publicId={post.cover_image_public_id}
                      fallbackUrl={post.cover_image_url}
                      alt={post.title}
                      width={900}
                      height={560}
                      sizes="(min-width: 1024px) 33vw, 100vw"
                      className="absolute inset-0 size-full object-cover transition duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-3 text-xs text-[var(--color-muted)]">
                      {post.category ? (
                        <span className="rounded-full bg-[var(--color-accent-tint)] px-3 py-1 text-[var(--color-accent)] uppercase tracking-[0.12em]">
                          {post.category}
                        </span>
                      ) : null}
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar className="size-3.5" /> {formatDate(post.created_at)}
                      </span>
                    </div>
                    <h3 className="mt-4 text-lg sm:text-xl font-semibold leading-snug">{post.title}</h3>
                    {post.excerpt ? (
                      <p className="mt-3 text-sm text-[var(--color-muted)] leading-relaxed">{post.excerpt}</p>
                    ) : null}
                    <div className="mt-auto pt-5 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-accent)]">
                      Read more <ArrowRight className="size-4 transition group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </Container>
      </Section>

      <CTABanner />
    </>
  )
}
