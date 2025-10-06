<script lang="ts">
  import Card from './Card.svelte';
  import IconBox from './IconBox.svelte';
  
  interface Props {
    icon: any; // Lucide icon component
    value: string;
    label: string;
    change?: string;
    variant?: 'primary' | 'secondary' | 'accent';
  }
  
  let { 
    icon: Icon, 
    value, 
    label, 
    change,
    variant = 'primary' 
  }: Props = $props();
</script>

<Card hover rounded="3xl" padding="sm" class="group">
  <div class="flex items-center justify-between mb-4">
    <IconBox {variant} size="md" glow class="group-hover:scale-110 transition-transform">
      <Icon class="w-6 h-6 text-white" />
    </IconBox>
    {#if change}
      <span class="text-green-400 text-sm font-semibold">{change}</span>
    {/if}
  </div>
  <h3 class="text-2xl sm:text-3xl font-bold mb-1">{value}</h3>
  <p class="text-gray-400 text-sm">{label}</p>
</Card>
