import type { User } from '@supabase/supabase-js'
import { getSupabaseBrowser } from '$services/supabase/client'

function assertBrowserContext() {
  if (typeof window === 'undefined') {
    throw new Error('authServiceClient functions must be used in a browser context')
  }
}

export const authServiceClient = {
  async signUp(email: string, password: string) {
    const supabase = getSupabaseBrowser()
    const { data, error } = await supabase.auth.signUp({
      email,
      password
    })

    if (error) throw error
    return data
  },

  async signIn(email: string, password: string) {
    const supabase = getSupabaseBrowser()
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    })

    if (error) throw error
    return data
  },

  async signInWithGoogle() {
    assertBrowserContext()

    const supabase = getSupabaseBrowser()
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/auth/callback`
      }
    })

    if (error) throw error
    return data
  },

  async logout() {
    const supabase = getSupabaseBrowser()
    const { error } = await supabase.auth.signOut()
    if (error) throw error
  },

  async getCurrentUser(): Promise<User | null> {
    const supabase = getSupabaseBrowser()
    const {
      data: { user },
      error
    } = await supabase.auth.getUser()

    if (error) throw error
    return user
  },

  async resetPassword(email: string) {
    const supabase = getSupabaseBrowser()
    const { error } = await supabase.auth.resetPasswordForEmail(email)
    if (error) throw error
  }
}
