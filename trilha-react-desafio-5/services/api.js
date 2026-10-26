import axios from 'axios';

export const getSupabaseApi = () => {
  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error(
      'Supabase is not configured. Set SUPABASE_URL and SUPABASE_ANON_KEY in .env.local.'
    );
  }

  return axios.create({
    baseURL: `${supabaseUrl.replace(/\/+$/, '')}/rest/v1`,
    headers: {
      apikey: supabaseAnonKey,
      Authorization: `Bearer ${supabaseAnonKey}`,
    },
  });
};
