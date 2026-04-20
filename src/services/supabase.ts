import { createClient, SupabaseClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL || ''
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY || ''

const createSafeClient = (): SupabaseClient | null => {
  if (!supabaseUrl || !supabaseAnonKey) {
    console.warn('Supabase env vars missing — running in offline mode')
    return null
  }
  return createClient(supabaseUrl, supabaseAnonKey)
}

export const supabase = createSafeClient() as SupabaseClient
