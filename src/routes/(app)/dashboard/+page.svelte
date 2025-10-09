<script lang="ts">
  import { Sparkles, User, Activity, TrendingUp, Zap, BarChart3, Plus } from 'lucide-svelte'
  import type { PageData } from './$types'

  let { data }: { data: PageData } = $props()
</script>

<div class="space-y-10 text-white">
  <section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
    <div class="glass-effect rounded-3xl p-6 hover-lift group">
      <div class="flex items-center justify-between mb-4">
        <div class="w-12 h-12 bg-brand-gradient rounded-2xl flex items-center justify-center glow-primary group-hover:scale-110 transition-transform">
          <Activity class="w-6 h-6 text-white" />
        </div>
        <span class="text-green-400 text-sm font-semibold">+12.5%</span>
      </div>
      <h3 class="text-2xl sm:text-3xl font-bold mb-1">2,543</h3>
      <p class="text-gray-400 text-sm">Total Users</p>
    </div>

    <div class="glass-effect rounded-3xl p-6 hover-lift group">
      <div class="flex items-center justify-between mb-4">
        <div class="w-12 h-12 bg-secondary rounded-2xl flex items-center justify-center glow-accent group-hover:scale-110 transition-transform">
          <TrendingUp class="w-6 h-6 text-white" />
        </div>
        <span class="text-green-400 text-sm font-semibold">+8.2%</span>
      </div>
      <h3 class="text-2xl sm:text-3xl font-bold mb-1">$12,458</h3>
      <p class="text-gray-400 text-sm">Revenue</p>
    </div>

    <div class="glass-effect rounded-3xl p-6 hover-lift group sm:col-span-2 lg:col-span-1">
      <div class="flex items-center justify-between mb-4">
        <div class="w-12 h-12 bg-accent rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform glow-accent">
          <Zap class="w-6 h-6 text-white" />
        </div>
        <span class="text-green-400 text-sm font-semibold">+23.1%</span>
      </div>
      <h3 class="text-2xl sm:text-3xl font-bold mb-1">98.5%</h3>
      <p class="text-gray-400 text-sm">Performance Score</p>
    </div>
  </section>

  <section class="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
    <div class="glass-effect rounded-3xl p-6 sm:p-8">
      <div class="flex items-center gap-3 mb-6">
        <BarChart3 class="w-6 h-6 text-primary" />
        <h2 class="text-xl sm:text-2xl font-bold">Recent Activity</h2>
      </div>
      <div class="space-y-4">
        <div class="flex items-center gap-4 p-4 glass-effect-light rounded-2xl hover:bg-white/10 transition-colors">
          <div class="w-10 h-10 bg-brand-gradient rounded-xl flex items-center justify-center flex-shrink-0">
            <User class="w-5 h-5 text-white" />
          </div>
          <div class="flex-1 min-w-0">
            <p class="text-sm font-semibold truncate">New user signed up</p>
            <p class="text-xs text-gray-400">2 minutes ago</p>
          </div>
        </div>
        <div class="flex items-center gap-4 p-4 glass-effect-light rounded-2xl hover:bg-white/10 transition-colors">
          <div class="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center flex-shrink-0">
            <TrendingUp class="w-5 h-5 text-white" />
          </div>
          <div class="flex-1 min-w-0">
            <p class="text-sm font-semibold truncate">Revenue milestone reached</p>
            <p class="text-xs text-gray-400">1 hour ago</p>
          </div>
        </div>
        <div class="flex items-center gap-4 p-4 glass-effect-light rounded-2xl hover:bg-white/10 transition-colors">
          <div class="w-10 h-10 bg-accent rounded-xl flex items-center justify-center flex-shrink-0">
            <Zap class="w-5 h-5 text-white" />
          </div>
          <div class="flex-1 min-w-0">
            <p class="text-sm font-semibold truncate">Performance improved</p>
            <p class="text-xs text-gray-400">3 hours ago</p>
          </div>
        </div>
      </div>
    </div>

    <div class="glass-effect rounded-3xl p-6 sm:p-8">
      <div class="flex items-center gap-3 mb-6">
        <Sparkles class="w-6 h-6 text-primary" />
        <h2 class="text-xl sm:text-2xl font-bold">Quick Actions</h2>
      </div>
      <div class="space-y-3">
        <button class="w-full p-4 glass-effect-light rounded-2xl hover:bg-white/10 transition-all text-left group">
          <div class="flex items-center justify-between">
            <span class="font-semibold">Create New Project</span>
            <div class="w-8 h-8 bg-brand-gradient rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <Plus class="w-4 h-4 text-white" />
            </div>
          </div>
        </button>
        <button class="w-full p-4 glass-effect-light rounded-2xl hover:bg-white/10 transition-all text-left group">
          <div class="flex items-center justify-between">
            <span class="font-semibold">View Analytics</span>
            <div class="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <BarChart3 class="w-4 h-4 text-white" />
            </div>
          </div>
        </button>
        <button class="w-full p-4 glass-effect-light rounded-2xl hover:bg-white/10 transition-all text-left group">
          <div class="flex items-center justify-between">
            <span class="font-semibold">Invite Team Members</span>
            <div class="w-8 h-8 bg-accent rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <User class="w-4 h-4 text-white" />
            </div>
          </div>
        </button>
      </div>
    </div>
  </section>
</div>