import { getSupabase } from './supabase';

export async function getPageContent(page: string): Promise<Record<string, string>> {
  const supabase = getSupabase();
  const { data } = await supabase
    .from('content_blocks')
    .select('id, content')
    .eq('page', page);

  const map: Record<string, string> = {};
  data?.forEach(row => { map[row.id] = row.content; });
  return map;
}

export async function getAllContent(): Promise<Record<string, string>> {
  const supabase = getSupabase();
  const { data } = await supabase
    .from('content_blocks')
    .select('id, content');

  const map: Record<string, string> = {};
  data?.forEach(row => { map[row.id] = row.content; });
  return map;
}
