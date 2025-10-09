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
    class="glass-effect border-r border-white/10 min-h-screen flex flex-col"
    style:width={`${$sidebarWidth}px`}
  >
    <div class="flex flex-1 flex-col p-6 gap-8">
      <div class="flex items-center justify-between">
        <a href="/dashboard" class="flex items-center gap-3 text-xl font-semibold gradient-text-accent uppercase tracking-wide">
          <span class={sidebarOpen ? '' : 'sr-only'}>Modelito</span>
        </a>
        <button
          type="button"
          class="btn btn-circle btn-sm glass-effect-light border border-white/10 hover:border-primary hover:text-primary"
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

      <nav class="flex-1 space-y-2">
        {#each navItems as item}
          <a
            href={item.href}
            class={`group flex items-center rounded-2xl px-4 py-3 transition-colors ${
              sidebarOpen ? 'gap-3' : 'justify-center'
            }`}
          >
            <item.icon class={`${sidebarOpen ? 'w-5 h-5' : 'w-7 h-7'} text-gray-300 transition-colors duration-200 group-hover:text-[color:var(--theme-primary)]`} />
            <span class={`text-sm font-medium ${sidebarOpen ? '' : 'sr-only'}`}>{item.label}</span>
          </a>
        {/each}
      </nav>

      <div class="mt-auto space-y-3">
        <div class={`glass-effect-light border border-white/10 rounded-2xl px-4 py-3 ${sidebarOpen ? '' : 'text-center'}`}>
          <p class="text-sm font-medium text-gray-100 truncate">{data.user.email}</p>
        </div>
        <button
          class="btn btn-sm glass-effect-light border-white/20 text-white hover:bg-white/10 w-full"
          onclick={handleLogout}
        >
          <span class={sidebarOpen ? '' : 'sr-only'}>Logout</span>
          <span aria-hidden={!sidebarOpen}>⎋</span>
        </button>
      </div>
    </div>
  </aside>

  <main class="flex-1 px-10 py-10">
    {@render children?.()}
  </main>
</div>
