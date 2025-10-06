import { redirect } from '@sveltejs/kit'
import { getSupabaseServer } from '$lib/supabase'
import type { LayoutServerLoad } from './$types'

export const load: LayoutServerLoad = async (event) => {
  const supabase = getSupabaseServer(event)
  
  // Check if user is authenticated
  const { data: { user } } = await supabase.auth.getUser()
  
  if (!user) {
    throw redirect(303, '/login')
  }
  
  // Return user data to all pages in (app) group
  return {
    user
  }
}