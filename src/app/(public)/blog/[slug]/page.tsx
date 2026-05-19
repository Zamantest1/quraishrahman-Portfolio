import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, Calendar } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Badge } from '@/components/ui/Badge'
import { CTABanner } from '@/components/sections/CTABanner'
import { PageImage } from '@/components/PageImage'
import { getBlogPostBySlug, listAllBlogSlugs, listPublishedBlogPosts } from '@/lib/blog'
import { formatDate } from '@/lib/format'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  const slugs = await listAllBlogSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await getBlogPostBySlug(slug)
  if (!post) return { title: 'Post not found' }
  return {
    title: post.meta_title ?? post.title,
    description: post.meta_description ?? post.excerpt ?? undefined,
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = await getBlogPostBySlug(slug)
  if (!post) notFound()
  const all = await listPublishedBlogPosts()
  const related = all.filter((p) => p.id !== post.id && p.category === post.category).slice(0, 2)
  return (
    <>
      <Section>
        <Container className="max-w-3xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-[var(--color-muted)] hover:text-[var(--color-accent)]"
          >
            <ArrowLeft className="size-4" /> All insights
          </Link>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-[var(--color-muted)]">
            {post.category ? (
              <span className="rounded-full bg-[var(--color-accent-tint)] px-3 py-1 text-[var(--color-accent)] uppercase tracking-[0.12em]">
                {post.category}
              </span>
            ) : null}
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="size-3.5" /> {formatDate(post.created_at)}
            </span>
          </div>
          <h1 className="mt-5 text-balance text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1]">
            {post.title}
          </h1>
          {post.excerpt ? (
            <p className="mt-5 text-[var(--color-muted)] text-base sm:text-lg leading-relaxed">{post.excerpt}</p>
          ) : null}
          <div className="mt-10 relative aspect-[16/9] overflow-hidden rounded-3xl border border-[var(--color-line)]">
            <PageImage
              publicId={post.cover_image_public_id}
              fallbackUrl={post.cover_image_url}
              alt={post.title}
              width={1600}
              height={900}
              sizes="(min-width: 768px) 70vw, 100vw"
              priority
              className="absolute inset-0 size-full object-cover"
            />
          </div>
          <article
            className="tiptap-content mt-12 max-w-none"
            dangerouslySetInnerHTML={{ __html: post.body_html ?? '' }}
          />
        </Container>
      </Section>

      {related.length > 0 ? (
        <Section variant="surface">
          <Container>
            <Badge>Related</Badge>
            <h2 className="mt-5 text-2xl sm:text-3xl font-bold tracking-tight">More on this topic</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {related.map((p) => (
                <Link
                  key={p.id}
                  href={`/blog/${p.slug}`}
                  className="group flex flex-col rounded-2xl border border-[var(--color-line)] bg-[var(--color-canvas)]/70 p-6 transition hover:border-[var(--color-accent)]/40"
                >
                  <span className="text-xs uppercase tracking-[0.12em] text-[var(--color-accent)]">{p.category}</span>
                  <h3 className="mt-3 text-lg font-semibold leading-snug">{p.title}</h3>
                  {p.excerpt ? <p className="mt-3 text-sm text-[var(--color-muted)] leading-relaxed">{p.excerpt}</p> : null}
                </Link>
              ))}
            </div>
          </Container>
        </Section>
      ) : null}

      <CTABanner />
    </>
  )
}
