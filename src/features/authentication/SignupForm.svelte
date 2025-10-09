<script lang="ts">
  import { authServiceClient } from './client/auth-service'
  import { goto } from '$app/navigation'
  import { Sparkles, Mail, Lock, AlertCircle, CheckCircle2 } from 'lucide-svelte'
  import { Button } from '$shared/components'

  let email = $state('')
  let password = $state('')
  let error = $state('')
  let loading = $state(false)
  let success = $state(false)

  async function handleSignup() {
    loading = true
    error = ''

    try {
      await authServiceClient.signUp(email, password)
      success = true
    } catch (err: any) {
      error = err.message
    } finally {
      loading = false
    }
  }

  async function handleGoogleSignup() {
    try {
      await authServiceClient.signInWithGoogle()
    } catch (err: any) {
      error = err.message
    }
  }
</script>

<div class="glass-effect rounded-3xl p-8 backdrop-blur-xl">
  <!-- Logo and Title -->
  <div class="text-center mb-8">
    <div class="inline-flex items-center justify-center w-16 h-16 bg-brand-gradient rounded-2xl mb-4 glow-primary">
      <Sparkles class="w-8 h-8 text-white" />
    </div>
    <h1 class="text-3xl font-bold text-white mb-2">Create Account</h1>
    <p class="text-gray-400">Join Modelito today</p>
  </div>

  {#if success}
    <div class="glass-effect-light border border-green-500/30 rounded-2xl p-4 mb-6 flex items-start gap-3">
      <CheckCircle2 class="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
      <span class="text-green-300 text-sm">Check your email to confirm your account!</span>
    </div>
  {:else if error}
    <div class="glass-effect-light border border-red-500/30 rounded-2xl p-4 mb-6 flex items-start gap-3">
      <AlertCircle class="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
      <span class="text-red-300 text-sm">{error}</span>
    </div>
  {/if}

  <!-- Google Sign Up Button -->
  <button
    onclick={handleGoogleSignup}
    class="w-full glass-effect-light border border-white/20 rounded-2xl px-6 py-4 flex items-center justify-center gap-3 text-white hover:bg-white/10 transition-all mb-6 disabled:opacity-50 disabled:cursor-not-allowed"
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

  <div class="flex items-center gap-4 mb-6">
    <div class="flex-1 h-px bg-white/10"></div>
    <span class="text-gray-400 text-sm">OR</span>
    <div class="flex-1 h-px bg-white/10"></div>
  </div>

  <!-- Email/Password Form -->
  <form onsubmit={handleSignup}>
    <div class="space-y-4">
      <div>
        <label for="email" class="block text-sm font-medium text-gray-300 mb-2">
          Email
        </label>
        <div class="relative">
          <Mail class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            id="email"
            type="email"
            bind:value={email}
            class="w-full glass-effect-light border border-white/20 rounded-2xl px-12 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 disabled:opacity-50 disabled:cursor-not-allowed"
            placeholder="your@email.com"
            required
            disabled={success}
          />
        </div>
      </div>

      <div>
        <label for="password" class="block text-sm font-medium text-gray-300 mb-2">
          Password
        </label>
        <div class="relative">
          <Lock class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            id="password"
            type="password"
            bind:value={password}
            class="w-full glass-effect-light border border-white/20 rounded-2xl px-12 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 disabled:opacity-50 disabled:cursor-not-allowed"
            placeholder="••••••••"
            required
            minlength="6"
            disabled={success}
          />
        </div>
        <p class="text-xs text-gray-500 mt-2">Minimum 6 characters</p>
      </div>
    </div>

    <Button
      type="submit"
      class="w-full mt-6 rounded-2xl px-6 py-4 font-semibold hover:scale-[1.02] transition-transform glow-primary disabled:opacity-50 disabled:cursor-not-allowed"
      disabled={loading || success}
    >
      {loading ? 'Creating account...' : 'Sign Up'}
    </Button>
  </form>

  <p class="text-center text-sm mt-6 text-gray-400">
    Already have an account?
    <a href="/login" class="text-primary hover:text-primary-focus font-semibold transition-colors">Sign in</a>
  </p>
</div>
