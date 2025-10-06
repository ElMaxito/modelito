import { createBrowserClient, createServerClient } from '@supabase/ssr'

const supabaseUrl =
  import.meta.env.VITE_PUBLIC_SUPABASE_URL || import.meta.env.PUBLIC_SUPABASE_URL
const supabaseKey =
  import.meta.env.VITE_PUBLIC_SUPABASE_KEY || import.meta.env.PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing Supabase environment variables. Check your .env.local file.')
}

export function getSupabaseBrowser() {
  return createBrowserClient(supabaseUrl, supabaseKey)
}

export function getSupabaseServer(event: { cookies: any }) {
  return createServerClient(supabaseUrl, supabaseKey, {
    cookies: {
      get: (key) => event.cookies.get(key),
      set: (key, value, options) => event.cookies.set(key, value, options),
      remove: (key, options) => event.cookies.delete(key, options)
    }
  })
}