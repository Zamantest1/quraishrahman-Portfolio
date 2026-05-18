# Quraish Rahman Portfolio

A professional blue-shade SEO expert portfolio for **Quraish Rahman**. The frontend includes public portfolio sections, lead capture, and an admin dashboard scaffold ready for Supabase content storage and Cloudinary image uploads.

## Features

- Professional SEO-focused landing page with services, stats, process, case studies, testimonials, and contact form
- Responsive blue visual system with polished cards, fixed navigation, and mobile menu
- Private `/admin` dashboard scaffold for editing hero copy and managing image URLs/uploads
- Supabase-ready content loading, content saving, and lead submission
- Cloudinary unsigned upload helper for admin images
- Demo fallback content when environment variables are not configured

## Tech stack

- Vite
- React
- TypeScript
- CSS
- Supabase client
- Cloudinary unsigned uploads

## Getting started

```bash
npm install
npm run dev
```

## Environment variables

Create `.env.local` when Supabase and Cloudinary credentials are available:

```bash
VITE_SUPABASE_URL="https://your-project.supabase.co"
VITE_SUPABASE_ANON_KEY="your-public-anon-key"
VITE_CLOUDINARY_CLOUD_NAME="your-cloud-name"
VITE_CLOUDINARY_UPLOAD_PRESET="your-unsigned-upload-preset"
```

## Scripts

```bash
npm run dev
npm run lint
npm run build
npm run preview
```

## Supabase setup

Use `supabase/schema.sql` as the starter SQL for the `site_content` and `leads` tables. Insert the JSON from `src/lib/content.ts` into `site_content.content` with slug `quraish-rahman` to seed live content.

## Admin flow

The admin dashboard lives at `/admin`, separate from the public landing page. It is frontend-ready: when Supabase variables are present, saving content persists the hero copy/image URL; when Cloudinary variables are present, image uploads return a hosted `secure_url`. Add Supabase Auth before production launch so only approved admins can access the dashboard.
