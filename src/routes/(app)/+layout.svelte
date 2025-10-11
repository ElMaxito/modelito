<script lang="ts">
  import { authServiceClient } from '$features/authentication/client/auth-service'
  import { goto } from '$app/navigation'
  import { tweened } from 'svelte/motion'
  import { quintOut } from 'svelte/easing'
  import { ChevronLeft, ChevronRight, LayoutDashboard, Settings, Users } from 'lucide-svelte'
  import type { LayoutData } from './$types'

  let { data, children }: { data: LayoutData; children: any } = $props()
  const collapsedWidth = 112
  const expandedWidth = 288
  let sidebarOpen = $state(false)
  const sidebarWidth = tweened(collapsedWidth, { duration: 350, easing: quintOut })

  const navItems = [
    { label: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
    { label: 'Projects', href: '#', icon: Users },
    { label: 'Settings', href: '#', icon: Settings }
  ]

  function deriveInitial(email: string): string {
    return email.trim().charAt(0).toUpperCase() || 'A'
  }

  function deriveLabel(email: string): string {
    if (!email) return 'Account'
    const [name] = email.split('@')
    if (!name) return 'Account'
    return name.charAt(0).toUpperCase() + name.slice(1)
  }

  const userEmail = $derived(data.user?.email ?? '')
  const userInitial = $derived(deriveInitial(userEmail))
  const userLabel = $derived(deriveLabel(userEmail))

  async function handleLogout() {
    await authServiceClient.logout()
    goto('/login')
  }

  function toggleSidebar() {
    sidebarOpen = !sidebarOpen
    sidebarWidth.set(sidebarOpen ? expandedWidth : collapsedWidth)
  }
</script>

<div class="min-h-screen animated-gradient text-white flex">
  <aside
    class="glass-effect border-r border-white/8 min-h-screen flex flex-col"
    style:width={`${$sidebarWidth}px`}
  >
    <div class="flex flex-1 flex-col gap-10 p-6">
      <div class="flex items-center justify-between">
        <a href="/dashboard" class="flex items-center gap-3 text-xl font-semibold gradient-text-accent uppercase tracking-wide">
          <span class={sidebarOpen ? '' : 'sr-only'}>Modelito</span>
        </a>
        <button
          type="button"
          class="flex h-9 w-9 items-center justify-center rounded-full border border-white/12 bg-white/5 text-white/60 transition hover:border-white/20 hover:text-white"
          onclick={toggleSidebar}
          aria-label="Toggle sidebar"
        >
          {#if sidebarOpen}
            <ChevronLeft class="w-4 h-4" />
          {:else}
            <ChevronRight class="w-4 h-4" />
          {/if}
        </button>
      </div>

      <nav class="flex-1 space-y-1">
        {#each navItems as item}
          <a
            href={item.href}
            class={`group flex items-center rounded-2xl text-sm font-medium transition-colors duration-200 ${
              sidebarOpen
                ? 'gap-3 px-4 py-3'
                : 'justify-center p-3'
            }`}
            aria-label={sidebarOpen ? undefined : item.label}
          >
            <item.icon
              class={`${sidebarOpen ? 'h-5 w-5' : 'h-6 w-6'} text-white/60 transition-colors duration-200 group-hover:text-[color:var(--theme-primary)]`}
            />
            <span class={`${sidebarOpen ? '' : 'sr-only'}`}>{item.label}</span>
          </a>
        {/each}
      </nav>

      <div class="mt-auto space-y-4">
        <div
          class={`flex items-center transition-all duration-200 ${
            sidebarOpen ? 'gap-3 px-4 py-3' : 'justify-center p-2'
          }`}
        >
          <div class="flex h-10 w-10 items-center justify-center rounded-full bg-white/[0.12] text-sm font-semibold tracking-wide text-white">
            {userInitial}
          </div>
          {#if sidebarOpen}
            <div class="flex flex-col">
              <span class="text-sm font-medium text-white/90">{userLabel}</span>
              <span class="text-xs text-white/40">Signed in</span>
            </div>
          {/if}
        </div>
        <button
          class={`flex w-full items-center justify-center rounded-2xl border border-transparent text-white/70 transition-all duration-200 hover:border-[color:var(--theme-primary)]/50 hover:text-[color:var(--theme-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--theme-primary)]/40 ${
            sidebarOpen ? 'gap-2 px-4 py-3 text-sm font-medium' : 'p-3'
          }`}
          onclick={handleLogout}
        >
          {#if sidebarOpen}
            <span>Logout</span>
            <span aria-hidden="true">⎋</span>
          {:else}
            <span aria-hidden="true">⎋</span>
            <span class="sr-only">Logout</span>
          {/if}
        </button>
      </div>
    </div>
  </aside>

  <main class="flex-1 px-10 py-10">
    {@render children?.()}
  </main>
</div>
