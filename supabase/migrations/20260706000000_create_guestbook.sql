-- 방명록 테이블
create table if not exists public.guestbook (
  id bigint generated always as identity primary key,
  name text not null check (char_length(name) between 1 and 40),
  message text not null check (char_length(message) between 1 and 500),
  created_at timestamptz not null default now()
);

alter table public.guestbook enable row level security;

-- 누구나 읽을 수 있고, 누구나 글을 남길 수 있다 (수정/삭제는 불가)
create policy "guestbook_select" on public.guestbook
  for select using (true);

create policy "guestbook_insert" on public.guestbook
  for insert with check (
    char_length(name) between 1 and 40
    and char_length(message) between 1 and 500
  );
