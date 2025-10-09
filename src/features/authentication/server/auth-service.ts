import type { RequestEvent } from '@sveltejs/kit'
import type { User, Session } from '@supabase/supabase-js'
import { getSupabaseServer } from '$services/supabase/client'

export const authServiceServer = {
  async getClient(event: RequestEvent) {
    return getSupabaseServer(event)
  },

  async getSession(event: RequestEvent): Promise<Session | null> {
    const supabase = await this.getClient(event)
    const {
      data: { session },
      error
    } = await supabase.auth.getSession()

    if (error) throw error
    return session ?? null
  },

  async getUser(event: RequestEvent): Promise<User | null> {
    const supabase = await this.getClient(event)
    const {
      data: { user },
      error
    } = await supabase.auth.getUser()

    if (error) throw error
    return user ?? null
  },

  async requireUser(event: RequestEvent): Promise<User> {
    const user = await this.getUser(event)
    if (!user) {
      throw Object.assign(new Error('Unauthorized'), { status: 401 })
    }
    return user
  }
}
