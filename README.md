# 고태윤 개인 홈페이지

Next.js + Tailwind CSS로 만든 개인 소개 홈페이지입니다.

**라이브 사이트**: https://homepage-beta-woad.vercel.app

- **호스팅**: Vercel (GitHub 저장소 push 시 자동 배포)
- **방명록**: Supabase (Postgres + Row Level Security)

## 로컬 실행

```bash
npm install
cp .env.example .env.local   # Supabase URL / anon key 입력
npm run dev
```

## 내용 수정

- 프로필·기술 스택·프로젝트: `app/page.tsx` 상단의 `profile`, `skills`, `projects` 객체를 수정하세요.
- 아바타 이미지: `public/avatar.svg`를 원하는 이미지로 교체하세요.

## Supabase

방명록 테이블 스키마는 `supabase/migrations/`에 있습니다. 새 프로젝트에 적용하려면:

```bash
supabase link --project-ref <project-ref>
supabase db push
```
