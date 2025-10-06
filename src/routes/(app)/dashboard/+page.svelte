<script lang="ts">
    import { authService } from '$features/authentication/auth-service'
    import { goto } from '$app/navigation'
    import type { PageData } from './$types'
    
    let { data }: { data: PageData } = $props()
  
    async function handleLogout() {
      await authService.signOut()
      goto('/login')
    }
  </script>
  
  <div class="container mx-auto p-8">
    <div class="flex justify-between items-center mb-8">
      <h1 class="text-3xl font-bold">Dashboard</h1>
      <button class="btn btn-ghost" onclick={handleLogout}>
        Logout
      </button>
    </div>
  
    <div class="card bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="card-title">Welcome!</h2>
        <p>You're logged in as: <strong>{data.user.email}</strong></p>
      </div>
    </div>
  </div>