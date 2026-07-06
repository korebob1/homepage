import type { Metadata } from "next";
import { Noto_Sans_KR, Geist_Mono } from "next/font/google";
import "./globals.css";

const notoSansKr = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "고태윤 | Taeyun Ko",
  description: "개발자 고태윤의 개인 홈페이지입니다. 소개, 기술 스택, 프로젝트, 방명록을 담고 있습니다.",
  openGraph: {
    title: "고태윤 | Taeyun Ko",
    description: "개발자 고태윤의 개인 홈페이지",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${notoSansKr.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
