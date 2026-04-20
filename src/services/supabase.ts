import { createClient, SupabaseClient } from '@supabase/supabase-js'

const supabaseUrl = (process.env.REACT_APP_SUPABASE_URL || '').trim()
const supabaseAnonKey = (process.env.REACT_APP_SUPABASE_ANON_KEY || '').trim()

let supabase: SupabaseClient | null = null

try {
  if (supabaseUrl && supabaseAnonKey && supabaseUrl.startsWith('http')) {
    supabase = createClient(supabaseUrl, supabaseAnonKey)
  } else {
    console.warn('Supabase env vars missing or invalid — running in offline mode')
  }
} catch (err) {
  console.warn('Supabase init failed — running in offline mode', err)
}

export { supabase }
