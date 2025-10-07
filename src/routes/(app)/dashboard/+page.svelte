<script lang="ts">
    import { authService } from '$features/authentication/auth-service'
    import { goto } from '$app/navigation'
    import { Sparkles, LogOut, User, Activity, TrendingUp, Zap, BarChart3, Settings, Plus } from 'lucide-svelte'
    import type { PageData } from './$types'
    
    let { data }: { data: PageData } = $props()
  
    async function handleLogout() {
      await authService.logout()
      goto('/login')
    }
  </script>
  
  <div class="min-h-screen animated-gradient text-white">
    <!-- Navbar -->
    <nav class="glass-effect border-b border-white/10">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16 sm:h-20">
          <div class="flex items-center space-x-2">
            <div class="w-8 h-8 sm:w-10 sm:h-10 bg-brand-gradient rounded-lg flex items-center justify-center glow-primary">
              <Sparkles class="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <h1 class="text-xl sm:text-2xl font-bold gradient-text-accent">Modelito</h1>
          </div>
          <div class="flex items-center gap-2 sm:gap-4">
            <button class="btn btn-ghost btn-sm sm:btn-md">
              <Settings class="w-4 h-4 sm:w-5 sm:h-5" />
              <span class="hidden sm:inline">Settings</span>
            </button>
            <button onclick={handleLogout} class="btn btn-sm sm:btn-md glass-effect-light border-white/20 text-white hover:bg-white/10">
              <LogOut class="w-4 h-4 sm:w-5 sm:h-5" />
              <span class="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <!-- Welcome Section -->
      <div class="mb-8 sm:mb-12">
        <div class="glass-effect rounded-3xl p-6 sm:p-8 md:p-12 relative overflow-hidden">
          <!-- Background gradient -->
          <div class="absolute top-0 right-0 w-64 h-64 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          
          <div class="relative z-10">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-12 h-12 sm:w-16 sm:h-16 bg-brand-gradient rounded-2xl flex items-center justify-center glow-primary">
                <User class="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <div>
                <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold">Welcome Back!</h1>
                <p class="text-gray-400 text-sm sm:text-base">
                  {data.user.email}
                </p>
              </div>
            </div>
            <p class="text-gray-300 text-sm sm:text-base md:text-lg max-w-2xl">
              You're all set! Start exploring your dashboard and manage your applications with ease.
            </p>
          </div>
        </div>
      </div>

      <!-- Stats Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
        <!-- Stat Card 1 -->
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

        <!-- Stat Card 2 -->
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

        <!-- Stat Card 3 -->
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
      </div>

      <!-- Activity Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        <!-- Recent Activity -->
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

        <!-- Quick Actions -->
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
      </div>
    </div>
  </div>