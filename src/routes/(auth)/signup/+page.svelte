<script lang="ts">
  import { authService } from '$features/authentication/auth-service'
  import { goto } from '$app/navigation'
  
  let email = $state('')
  let password = $state('')
  let error = $state('')
  let loading = $state(false)
  let success = $state(false)

  async function handleSignup() {
    loading = true
    error = ''
    
    try {
      await authService.signUp(email, password)
      success = true
    } catch (err: any) {
      error = err.message
    } finally {
      loading = false
    }
  }

  async function handleGoogleSignup() {
    try {
      await authService.signInWithGoogle()
    } catch (err: any) {
      error = err.message
    }
  }
</script>

<div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-200">
  <div class="card w-96 bg-white shadow-2xl">
    <div class="card-body">
      <h2 class="card-title text-2xl font-bold text-gray-800 mb-2">
        Create Account
      </h2>
      <p class="text-gray-600 mb-4">Join Modelito today</p>
      
      {#if success}
        <div class="alert alert-success mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>Check your email to confirm your account!</span>
        </div>
      {:else if error}
        <div class="alert alert-error mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>{error}</span>
        </div>
      {/if}

      <!-- Google Sign Up Button -->
      <button 
        onclick={handleGoogleSignup}
        class="btn btn-outline w-full mb-4 gap-2"
        disabled={success}
      >
        <svg class="w-5 h-5" viewBox="0 0 24 24">
          <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
          <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
          <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
          <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
        </svg>
        Continue with Google
      </button>

      <div class="divider">OR</div>

      <!-- Email/Password Form -->
      <form onsubmit={handleSignup}>
        <div class="form-control">
          <label class="label" for="email">
            <span class="label-text">Email</span>
          </label>
          <input
            id="email"
            type="email"
            bind:value={email}
            class="input input-bordered"
            placeholder="your@email.com"
            required
            disabled={success}
          />
        </div>

        <div class="form-control mt-4">
          <label class="label" for="password">
            <span class="label-text">Password</span>
          </label>
          <input
            id="password"
            type="password"
            bind:value={password}
            class="input input-bordered"
            placeholder="••••••••"
            required
            minlength="6"
            disabled={success}
          />
          <div class="label">
            <span class="label-text-alt">Minimum 6 characters</span>
          </div>
        </div>

        <div class="form-control mt-6">
          <button 
            type="submit" 
            class="btn btn-primary"
            disabled={loading || success}
          >
            {loading ? 'Creating account...' : 'Sign Up'}
          </button>
        </div>
      </form>

      <p class="text-center text-sm mt-6 text-gray-600">
        Already have an account?
        <a href="/login" class="link link-primary font-semibold">Sign in</a>
      </p>
    </div>
  </div>
</div>