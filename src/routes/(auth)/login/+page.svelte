<script lang="ts">
  import LoginForm from '$features/authentication/LoginForm.svelte'
  import { ArrowLeft } from 'lucide-svelte'
</script>

<div class="min-h-screen animated-gradient flex items-center justify-center px-4 py-8">
  <!-- Background decorations -->
  <div class="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
    <div class="absolute top-1/4 left-1/4 w-64 h-64 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
    <div class="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style="animation-delay: 2s;"></div>
  </div>

  <div class="relative z-10 w-full max-w-md">
    <!-- Back to home link -->
    <a href="/" class="inline-flex items-center gap-2 text-white/70 hover:text-white mb-8 transition-colors">
      <ArrowLeft class="w-4 h-4" />
      Back to home
    </a>

    <LoginForm />
  </div>
</div>