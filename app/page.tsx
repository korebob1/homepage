import Image from "next/image";
import Guestbook from "@/components/Guestbook";

// ── 프로필 정보 (자유롭게 수정하세요) ─────────────────────────
const profile = {
  name: "고태윤",
  nameEn: "Taeyun Ko",
  tagline: "만드는 것을 좋아하는 개발자",
  email: "korebob1@gmail.com",
  github: "https://github.com/taeyunko", // GitHub 연동 후 자동 갱신됩니다
  intro: [
    "안녕하세요! 아이디어를 실제로 동작하는 서비스로 만드는 일을 좋아하는 개발자 고태윤입니다.",
    "웹 기술을 중심으로 프론트엔드부터 배포 인프라까지 폭넓게 다루며, 작게 만들고 빠르게 배포하고 꾸준히 다듬는 개발을 지향합니다.",
    "이 홈페이지도 Next.js로 만들어 GitHub과 Vercel로 배포하고, 방명록은 Supabase로 운영하고 있습니다.",
  ],
};

const skills = [
  { category: "Frontend", items: ["TypeScript", "React", "Next.js", "Tailwind CSS"] },
  { category: "Backend", items: ["Node.js", "Supabase", "PostgreSQL", "REST API"] },
  { category: "DevOps", items: ["GitHub", "Vercel", "CI/CD"] },
  { category: "Tools", items: ["Git", "VS Code", "Claude Code", "Figma"] },
];

const projects = [
  {
    title: "개인 홈페이지",
    description:
      "지금 보고 계신 이 사이트입니다. Next.js + Tailwind CSS로 만들고 Vercel에 배포했으며, 방명록은 Supabase를 사용합니다.",
    tags: ["Next.js", "Supabase", "Vercel"],
  },
  {
    title: "사이드 프로젝트",
    description:
      "새로운 기술을 배우면 작은 프로젝트로 직접 만들어 봅니다. 진행 중인 실험들은 GitHub에서 확인하실 수 있습니다.",
    tags: ["Side Project", "GitHub"],
  },
];
// ──────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-6">
      {/* 히어로 */}
      <section className="relative flex flex-col items-center gap-6 py-24 text-center sm:flex-row sm:text-left">
        <div
          aria-hidden
          className="absolute inset-x-[-100vw] top-0 -z-10 h-full bg-[url(/hero-pattern.svg)] bg-cover bg-center opacity-70"
        />
        <Image
          src="/avatar.svg"
          alt={`${profile.name} 아바타`}
          width={144}
          height={144}
          priority
          className="rounded-3xl shadow-lg"
        />
        <div>
          <h1 className="text-4xl font-black tracking-tight">
            {profile.name}
            <span className="ml-3 align-middle text-lg font-medium text-muted">
              {profile.nameEn}
            </span>
          </h1>
          <p className="mt-3 text-lg text-muted">{profile.tagline}</p>
          <div className="mt-5 flex flex-wrap justify-center gap-3 sm:justify-start">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-foreground px-4 py-2 text-sm font-medium text-background transition hover:opacity-85"
            >
              GitHub
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="rounded-lg border border-border-line bg-card px-4 py-2 text-sm font-medium transition hover:border-accent"
            >
              이메일 보내기
            </a>
          </div>
        </div>
      </section>

      {/* 소개 */}
      <section id="about" className="border-t border-border-line py-16">
        <h2 className="mb-6 text-2xl font-bold">
          <span className="mr-2 text-accent">01.</span>소개
        </h2>
        <div className="space-y-4 leading-relaxed text-foreground/90">
          {profile.intro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      {/* 기술 스택 */}
      <section id="skills" className="border-t border-border-line py-16">
        <h2 className="mb-6 text-2xl font-bold">
          <span className="mr-2 text-accent">02.</span>기술 스택
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {skills.map((group) => (
            <div
              key={group.category}
              className="rounded-xl border border-border-line bg-card p-5"
            >
              <h3 className="mb-3 font-mono text-sm font-semibold text-accent">
                {group.category}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full bg-accent-soft px-3 py-1 text-sm"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 프로젝트 */}
      <section id="projects" className="border-t border-border-line py-16">
        <h2 className="mb-6 text-2xl font-bold">
          <span className="mr-2 text-accent">03.</span>프로젝트
        </h2>
        <div className="space-y-4">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-xl border border-border-line bg-card p-6 transition hover:border-accent"
            >
              <h3 className="mb-2 text-lg font-semibold">{project.title}</h3>
              <p className="mb-4 text-sm leading-relaxed text-foreground/85">
                {project.description}
              </p>
              <ul className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li key={tag} className="font-mono text-xs text-muted">
                    #{tag}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* 방명록 */}
      <section id="guestbook" className="border-t border-border-line py-16">
        <h2 className="mb-2 text-2xl font-bold">
          <span className="mr-2 text-accent">04.</span>방명록
        </h2>
        <p className="mb-6 text-sm text-muted">
          다녀가신 흔적을 남겨주세요. Supabase에 소중히 보관됩니다.
        </p>
        <Guestbook />
      </section>

      <footer className="border-t border-border-line py-10 text-center text-sm text-muted">
        © 2026 {profile.name} · Next.js로 만들고 Vercel에서 배포, Supabase로
        저장합니다.
      </footer>
    </main>
  );
}
