import { createClient, type SupabaseClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Supabase 프로젝트가 아직 연결되지 않았으면 null을 반환해
// 방명록이 안내 문구로 대체되도록 한다.
export const supabase: SupabaseClient | null =
  url && anonKey ? createClient(url, anonKey) : null;

export type GuestbookEntry = {
  id: number;
  name: string;
  message: string;
  created_at: string;
};
