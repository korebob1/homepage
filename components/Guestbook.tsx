"use client";

import { useCallback, useEffect, useState } from "react";
import { supabase, type GuestbookEntry } from "@/lib/supabase";

export default function Guestbook() {
  const [entries, setEntries] = useState<GuestbookEntry[]>([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");
  const [loading, setLoading] = useState(true);

  const load = useCallback(async () => {
    if (!supabase) return;
    const { data, error } = await supabase
      .from("guestbook")
      .select("id, name, message, created_at")
      .order("created_at", { ascending: false })
      .limit(50);
    if (!error && data) setEntries(data);
    setLoading(false);
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  if (!supabase) {
    return (
      <p className="rounded-xl border border-border-line bg-card p-6 text-sm text-muted">
        방명록은 Supabase 연결 후에 열립니다. (환경 변수 설정 대기 중)
      </p>
    );
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !message.trim() || !supabase) return;
    setStatus("sending");
    const { error } = await supabase
      .from("guestbook")
      .insert({ name: name.trim(), message: message.trim() });
    if (error) {
      setStatus("error");
      return;
    }
    setName("");
    setMessage("");
    setStatus("idle");
    load();
  }

  return (
    <div className="space-y-8">
      <form
        onSubmit={submit}
        className="space-y-3 rounded-xl border border-border-line bg-card p-6"
      >
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="이름"
          maxLength={40}
          required
          className="w-full rounded-lg border border-border-line bg-background px-4 py-2 text-sm outline-none focus:border-accent"
        />
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="따뜻한 한마디를 남겨주세요 :)"
          maxLength={500}
          rows={3}
          required
          className="w-full resize-none rounded-lg border border-border-line bg-background px-4 py-2 text-sm outline-none focus:border-accent"
        />
        <div className="flex items-center justify-between">
          {status === "error" && (
            <span className="text-sm text-red-500">
              등록에 실패했어요. 잠시 후 다시 시도해주세요.
            </span>
          )}
          <button
            type="submit"
            disabled={status === "sending"}
            className="ml-auto rounded-lg bg-accent px-5 py-2 text-sm font-medium text-white transition hover:opacity-90 disabled:opacity-50"
          >
            {status === "sending" ? "등록 중…" : "남기기"}
          </button>
        </div>
      </form>

      <ul className="space-y-4">
        {loading && <li className="text-sm text-muted">불러오는 중…</li>}
        {!loading && entries.length === 0 && (
          <li className="text-sm text-muted">
            아직 방명록이 비어 있어요. 첫 번째 글을 남겨주세요!
          </li>
        )}
        {entries.map((entry) => (
          <li
            key={entry.id}
            className="rounded-xl border border-border-line bg-card p-5"
          >
            <div className="mb-1 flex items-baseline justify-between gap-4">
              <span className="font-medium">{entry.name}</span>
              <time className="shrink-0 text-xs text-muted">
                {new Date(entry.created_at).toLocaleDateString("ko-KR", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </div>
            <p className="whitespace-pre-wrap text-sm leading-relaxed">
              {entry.message}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
