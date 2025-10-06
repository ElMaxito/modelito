import { createBrowserClient, createServerClient } from '@supabase/ssr'

// TODO: Remove hardcoded Supabase credentials before production deployment
const supabaseUrl =
  import.meta.env.PUBLIC_SUPABASE_URL || 'https://vujxxyjbekpecrlfglxd.supabase.co'
const supabaseKey =
  import.meta.env.PUBLIC_SUPABASE_ANON_KEY ||
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ1anh4eWpiZWtwZWNybGZnbHhkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE1MzAxMDQsImV4cCI6MjA2NzEwNjEwNH0._zNLs7DQBnGg7FSV1Bnr0eazrWCnbPWHQeQTo_woKSA'

// DEBUG: Remove this after confirming it works
console.log('Supabase URL:', supabaseUrl)
console.log('Supabase Key exists:', !!supabaseKey)
console.log('Supabase Key length:', supabaseKey?.length)

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