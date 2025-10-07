import { redirect } from '@sveltejs/kit'
import { getSupabaseServer } from '../../../services/supabase/client'
import type { RequestHandler } from './$types'

export const GET: RequestHandler = async (event) => {
  console.log('OAuth callback hit:', event.url.toString())
  const code = event.url.searchParams.get('code')

  console.log('OAuth callback code:', code)

  if (!code) {
    console.warn('OAuth callback missing code param')
    throw redirect(303, '/login?error=oauth_missing_code')
  }

  const supabase = getSupabaseServer(event)

  const { data, error } = await supabase.auth.exchangeCodeForSession(code)

  if (error) {
    console.error('exchangeCodeForSession failed:', error)
    throw redirect(303, '/login?error=oauth_exchange_failed')
  }

  console.log('Supabase session established:', data.session?.access_token)
  throw redirect(303, '/dashboard')
}