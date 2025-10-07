import type { User } from '@supabase/supabase-js'
import { getSupabaseBrowser } from '../../services/supabase/client'

export const authService = {
  // Email/password methods (keep existing)
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

  // NEW: Google OAuth
  async signInWithGoogle() {
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
    const { data: { user }, error } = await supabase.auth.getUser()
    if (error) throw error
    return user
  },

  async resetPassword(email: string) {
    const supabase = getSupabaseBrowser()
    const { error } = await supabase.auth.resetPasswordForEmail(email)
    if (error) throw error
  }
}