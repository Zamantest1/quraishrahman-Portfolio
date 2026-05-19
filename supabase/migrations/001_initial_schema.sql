create extension if not exists "pgcrypto";

-- Leads from the contact form
create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  full_name text not null,
  email text not null,
  website_url text,
  budget_range text,
  message text not null,
  status text not null default 'new'
);

-- Blog posts
create table if not exists public.blog_posts (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  title text not null,
  slug text unique not null,
  excerpt text,
  body_html text,
  category text,
  cover_image_public_id text,
  cover_image_url text,
  is_published boolean not null default false,
  meta_title text,
  meta_description text
);

create index if not exists blog_posts_slug_idx on public.blog_posts (slug);
create index if not exists blog_posts_published_idx on public.blog_posts (is_published, created_at desc);

-- Case studies
create table if not exists public.case_studies (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  title text not null,
  slug text unique not null,
  industry text,
  challenge_html text,
  strategy_html text,
  results jsonb not null default '[]'::jsonb,
  testimonial text,
  testimonial_author text,
  testimonial_company text,
  cover_image_public_id text,
  cover_image_url text,
  is_published boolean not null default false
);

create index if not exists case_studies_slug_idx on public.case_studies (slug);
create index if not exists case_studies_published_idx on public.case_studies (is_published, created_at desc);

-- Editable site content (text fields and image references) keyed by string
create table if not exists public.site_content (
  key text primary key,
  value text not null,
  updated_at timestamptz not null default now()
);

-- Newsletter subscribers
create table if not exists public.newsletter (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  email text unique not null
);

-- Analytics: page view events
create table if not exists public.page_views (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  page_path text not null,
  visitor_id text,
  referrer text,
  user_agent text
);

create index if not exists page_views_created_idx on public.page_views (created_at desc);
create index if not exists page_views_visitor_idx on public.page_views (visitor_id);
create index if not exists page_views_path_idx on public.page_views (page_path);

-- Analytics: unique visitor registry (hashed fingerprint, NOT raw IP)
create table if not exists public.visitors (
  visitor_id text primary key,
  first_seen timestamptz not null default now(),
  last_seen timestamptz not null default now(),
  visit_count integer not null default 1
);

-- Analytics: live active sessions
create table if not exists public.active_sessions (
  visitor_id text primary key,
  last_seen timestamptz not null default now(),
  current_page text
);

-- Row Level Security
alter table public.leads enable row level security;
alter table public.blog_posts enable row level security;
alter table public.case_studies enable row level security;
alter table public.site_content enable row level security;
alter table public.newsletter enable row level security;
alter table public.page_views enable row level security;
alter table public.visitors enable row level security;
alter table public.active_sessions enable row level security;

-- Public reads for published content
drop policy if exists "leads_public_insert" on public.leads;
create policy "leads_public_insert" on public.leads for insert with check (true);

drop policy if exists "blog_public_select_published" on public.blog_posts;
create policy "blog_public_select_published" on public.blog_posts for select using (is_published = true);

drop policy if exists "case_studies_public_select_published" on public.case_studies;
create policy "case_studies_public_select_published" on public.case_studies for select using (is_published = true);

drop policy if exists "site_content_public_select" on public.site_content;
create policy "site_content_public_select" on public.site_content for select using (true);

drop policy if exists "newsletter_public_insert" on public.newsletter;
create policy "newsletter_public_insert" on public.newsletter for insert with check (true);

drop policy if exists "page_views_public_insert" on public.page_views;
create policy "page_views_public_insert" on public.page_views for insert with check (true);

drop policy if exists "visitors_public_upsert" on public.visitors;
create policy "visitors_public_upsert" on public.visitors for insert with check (true);
create policy "visitors_public_update" on public.visitors for update using (true) with check (true);
create policy "visitors_public_select" on public.visitors for select using (true);

drop policy if exists "active_sessions_public_upsert" on public.active_sessions;
create policy "active_sessions_public_upsert" on public.active_sessions for insert with check (true);
create policy "active_sessions_public_update" on public.active_sessions for update using (true) with check (true);
create policy "active_sessions_public_delete" on public.active_sessions for delete using (true);
create policy "active_sessions_public_select" on public.active_sessions for select using (true);

-- Authenticated admin (any signed-in user) full management
drop policy if exists "leads_auth_all" on public.leads;
create policy "leads_auth_all" on public.leads for all to authenticated using (true) with check (true);

drop policy if exists "blog_auth_all" on public.blog_posts;
create policy "blog_auth_all" on public.blog_posts for all to authenticated using (true) with check (true);

drop policy if exists "case_studies_auth_all" on public.case_studies;
create policy "case_studies_auth_all" on public.case_studies for all to authenticated using (true) with check (true);

drop policy if exists "site_content_auth_all" on public.site_content;
create policy "site_content_auth_all" on public.site_content for all to authenticated using (true) with check (true);

drop policy if exists "newsletter_auth_select" on public.newsletter;
create policy "newsletter_auth_select" on public.newsletter for select to authenticated using (true);

drop policy if exists "page_views_auth_select" on public.page_views;
create policy "page_views_auth_select" on public.page_views for select to authenticated using (true);
