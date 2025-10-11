<script lang="ts">
  import { Sparkles, User, Activity, TrendingUp, Zap, BarChart3, Plus } from 'lucide-svelte'
  import type { PageData } from './$types'

  let { data }: { data: PageData } = $props()
</script>

<div class="space-y-12 text-white font-sans">
  <section class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
    <div class="glass-effect rounded-[28px] p-7 hover-lift">
      <div class="flex items-start justify-between gap-6">
        <div class="flex items-center gap-4">
          <div class="flex h-12 w-12 items-center justify-center rounded-3xl border border-white/10 bg-white/5">
            <Activity class="h-6 w-6 text-white/90" />
          </div>
          <div>
            <p class="text-xs font-medium uppercase tracking-[0.18em] text-white/50">Total Users</p>
            <h3 class="mt-2 text-3xl font-semibold tracking-tight text-white">2,543</h3>
          </div>
        </div>
        <span class="rounded-full border border-emerald-400/15 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">+12.5%</span>
      </div>
    </div>

    <div class="glass-effect rounded-[28px] p-7 hover-lift">
      <div class="flex items-start justify-between gap-6">
        <div class="flex items-center gap-4">
          <div class="flex h-12 w-12 items-center justify-center rounded-3xl border border-white/10 bg-white/5">
            <TrendingUp class="h-6 w-6 text-white/90" />
          </div>
          <div>
            <p class="text-xs font-medium uppercase tracking-[0.18em] text-white/50">Revenue</p>
            <h3 class="mt-2 text-3xl font-semibold tracking-tight text-white">$12,458</h3>
          </div>
        </div>
        <span class="rounded-full border border-emerald-400/15 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">+8.2%</span>
      </div>
    </div>

    <div class="glass-effect rounded-[28px] p-7 hover-lift sm:col-span-2 lg:col-span-1">
      <div class="flex items-start justify-between gap-6">
        <div class="flex items-center gap-4">
          <div class="flex h-12 w-12 items-center justify-center rounded-3xl border border-white/10 bg-white/5">
            <Zap class="h-6 w-6 text-white/90" />
          </div>
          <div>
            <p class="text-xs font-medium uppercase tracking-[0.18em] text-white/50">Performance Score</p>
            <h3 class="mt-2 text-3xl font-semibold tracking-tight text-white">98.5%</h3>
          </div>
        </div>
        <span class="rounded-full border border-emerald-400/15 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">+23.1%</span>
      </div>
    </div>
  </section>

  <section class="grid grid-cols-1 gap-6 lg:grid-cols-2">
    <div class="glass-effect rounded-[28px] p-7 sm:p-8">
      <div class="flex items-center gap-3 pb-2">
        <div class="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
          <BarChart3 class="h-5 w-5 text-white/80" />
        </div>
        <h2 class="text-lg font-semibold tracking-tight text-white">Recent Activity</h2>
      </div>
      <div class="space-y-3 pt-4">
        <div class="flex items-center gap-4 rounded-2xl border border-white/8 bg-white/[0.04] p-4 transition-colors hover:bg-white/[0.07]">
          <div class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/6">
            <User class="h-5 w-5 text-white/80" />
          </div>
          <div class="min-w-0 flex-1">
            <p class="truncate text-sm font-medium text-white">New user signed up</p>
            <p class="text-xs text-white/50">2 minutes ago</p>
          </div>
        </div>
        <div class="flex items-center gap-4 rounded-2xl border border-white/8 bg-white/[0.04] p-4 transition-colors hover:bg-white/[0.07]">
          <div class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/6">
            <TrendingUp class="h-5 w-5 text-white/80" />
          </div>
          <div class="min-w-0 flex-1">
            <p class="truncate text-sm font-medium text-white">Revenue milestone reached</p>
            <p class="text-xs text-white/50">1 hour ago</p>
          </div>
        </div>
        <div class="flex items-center gap-4 rounded-2xl border border-white/8 bg-white/[0.04] p-4 transition-colors hover:bg-white/[0.07]">
          <div class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/6">
            <Zap class="h-5 w-5 text-white/80" />
          </div>
          <div class="min-w-0 flex-1">
            <p class="truncate text-sm font-medium text-white">Performance improved</p>
            <p class="text-xs text-white/50">3 hours ago</p>
          </div>
        </div>
      </div>
    </div>

    <div class="glass-effect rounded-[28px] p-7 sm:p-8">
      <div class="flex items-center gap-3 pb-2">
        <div class="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
          <Sparkles class="h-5 w-5 text-white/80" />
        </div>
        <h2 class="text-lg font-semibold tracking-tight text-white">Quick Actions</h2>
      </div>
      <div class="space-y-3 pt-4">
        <button class="w-full rounded-2xl border border-white/8 bg-white/[0.04] p-4 text-left transition hover:bg-white/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40">
          <div class="flex items-center justify-between">
            <span class="font-medium text-white">Create New Project</span>
            <div class="flex h-8 w-8 items-center justify-center rounded-xl border border-white/10 bg-white/6">
              <Plus class="h-4 w-4 text-white/80" />
            </div>
          </div>
        </button>
        <button class="w-full rounded-2xl border border-white/8 bg-white/[0.04] p-4 text-left transition hover:bg-white/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40">
          <div class="flex items-center justify-between">
            <span class="font-medium text-white">View Analytics</span>
            <div class="flex h-8 w-8 items-center justify-center rounded-xl border border-white/10 bg-white/6">
              <BarChart3 class="h-4 w-4 text-white/80" />
            </div>
          </div>
        </button>
        <button class="w-full rounded-2xl border border-white/8 bg-white/[0.04] p-4 text-left transition hover:bg-white/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40">
          <div class="flex items-center justify-between">
            <span class="font-medium text-white">Invite Team Members</span>
            <div class="flex h-8 w-8 items-center justify-center rounded-xl border border-white/10 bg-white/6">
              <User class="h-4 w-4 text-white/80" />
            </div>
          </div>
        </button>
      </div>
    </div>
  </section>
</div>