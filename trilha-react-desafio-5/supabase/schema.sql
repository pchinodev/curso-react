create table if not exists public.posts (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  body text not null,
  created_at timestamptz not null default now()
);

alter table public.posts enable row level security;

drop policy if exists "Public can read posts" on public.posts;
create policy "Public can read posts"
  on public.posts
  for select
  to anon
  using (true);

grant select on public.posts to anon;

insert into public.posts (id, title, description, body)
values (
  '11111111-1111-4111-8111-111111111111',
  'Bienvenido a mi blog',
  'Este es el primer artículo del blog, escrito en Markdown y guardado en Supabase.',
  E'# Hola, mundo\n\nEste blog carga sus publicaciones desde **Supabase**.\n\nPuedes crear y editar artículos desde el editor SQL de Supabase. El contenido de `body` admite Markdown.'
)
on conflict (id) do nothing;
