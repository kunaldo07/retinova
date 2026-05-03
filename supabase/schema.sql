-- Run this in Supabase → SQL Editor

create table if not exists leads (
  id             uuid primary key default gen_random_uuid(),
  created_at     timestamptz not null default now(),
  restaurant_name text not null,
  email          text not null,
  phone          text,
  source         text not null default 'landing_page'
);

-- Prevent duplicate emails
create unique index if not exists leads_email_unique on leads (email);

-- Enable Row Level Security
alter table leads enable row level security;

-- Only service-role (server-side) can read/write
-- The anon key used by the API route runs server-side via Next.js,
-- so we allow inserts from anon for the sign-up flow.
create policy "Allow anon inserts" on leads
  for insert to anon with check (true);

-- Block public reads — only access leads from the Supabase dashboard
create policy "Block public reads" on leads
  for select using (false);
