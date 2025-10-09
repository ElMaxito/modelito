import { redirect } from '@sveltejs/kit'
import { authServiceServer } from '$features/authentication/server/auth-service'
import type { LayoutServerLoad } from './$types'

export const load: LayoutServerLoad = async (event) => {
  const user = await authServiceServer.getUser(event)

  if (!user) {
    throw redirect(303, '/login')
  }

  // Return user data to all pages in (app) group
  return {
    user
  }
}