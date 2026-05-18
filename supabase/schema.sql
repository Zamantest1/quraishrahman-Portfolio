create extension if not exists "pgcrypto";

create table if not exists public.site_content (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  content jsonb not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  company text,
  goal text not null,
  created_at timestamptz not null default now()
);

alter table public.site_content enable row level security;
alter table public.leads enable row level security;

create policy "Allow public portfolio reads"
  on public.site_content
  for select
  using (true);

create policy "Allow public lead submissions"
  on public.leads
  for insert
  with check (true);

create policy "Allow authenticated content management"
  on public.site_content
  for all
  to authenticated
  using (true)
  with check (true);

create policy "Allow authenticated lead reads"
  on public.leads
  for select
  to authenticated
  using (true);
