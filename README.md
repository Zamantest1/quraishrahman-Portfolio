# Quraish Rahman — SEO Portfolio

Production portfolio + CMS for Quraish Rahman, an independent SEO strategist. Built on the latest Next.js (App Router) with Supabase (CMS + auth + analytics) and Cloudinary (image hosting). Deploys automatically to Vercel from the `main` branch.

## Stack

- **Framework**: Next.js (App Router, Server Components, Server Actions) + TypeScript
- **Styling**: Tailwind CSS v4 with a CSS-variable design system
- **Animation**: Framer Motion
- **CMS / Auth**: Supabase (Postgres + Realtime + Auth)
- **Images**: Cloudinary (signed server-side uploads + `next-cloudinary` rendering)
- **Editor**: TipTap (rich-text for blog posts and case studies)
- **Charts**: Recharts (admin analytics)
- **Icons**: Lucide

## Pages

Public:
- `/` Home (hero, stats bar, services teaser, featured case study, testimonial, CTA)
- `/about`
- `/services`
- `/case-studies` + `/case-studies/[slug]`
- `/blog` + `/blog/[slug]`
- `/contact`

Admin (protected, no public navbar/footer):
- `/admin/login`
- `/admin` — dashboard with live visitors + stats + 30-day chart
- `/admin/analytics` — full traffic, top pages, recent page views
- `/admin/leads` — contact form submissions
- `/admin/content` — edit hero / about / testimonial / featured case study
- `/admin/images` — upload hero / about / OG images via Cloudinary
- `/admin/blog` — list / new / edit blog posts (TipTap editor)
- `/admin/case-studies` — list / new / edit case studies (TipTap + dynamic result metrics)

## Local development

```bash
npm install
cp .env.example .env.local   # fill in real values
npm run dev                  # http://localhost:3000
```

## Environment variables

Variable names live in `.env.example`. Real values must be set in two places:

1. **Vercel** → Project Settings → Environment Variables (powers the deployed site).
2. **GitHub** → Settings → Secrets and variables → Actions (for any CI workflows).

Never commit a `.env.local` file. The `SUPABASE_SERVICE_ROLE_KEY` and `CLOUDINARY_API_SECRET` are server-only — they MUST NOT be prefixed with `NEXT_PUBLIC_` and must never be referenced from a client component.

## Database

The Supabase schema lives in `supabase/migrations/`. Apply migrations from the Supabase dashboard's SQL editor in numerical order, or via the Supabase CLI:

```bash
supabase db push
```

Tables:
- `leads` — contact form submissions
- `site_content` — editable text fields and image references (keyed)
- `blog_posts` — title, slug, body_html, cover image, published flag
- `case_studies` — title, slug, challenge/strategy HTML, results JSON, testimonial
- `newsletter` — email signups
- `page_views`, `visitors`, `active_sessions` — privacy-respecting analytics

Row-Level Security is enabled on every table. Public reads/inserts go through anon key; admin reads/writes go through the service role key from server-only code.

## Admin user

The admin user is created manually in Supabase → Authentication → Users → Add user → "Create new user" with email + password. Then sign in at `/admin/login`.

## Deployment

Vercel auto-deploys every push to `main`. To switch Vercel projects:

1. Import this GitHub repo into the new Vercel project.
2. Paste every variable from `.env.example` into the new project's Environment Variables.
3. Push to `main` — that's it.

## Credit

Built by [Shomik](https://shomikujzaman.vercel.app).
