<script lang="ts">
  import type { Snippet } from 'svelte';
  
  interface Props {
    size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
    class?: string;
    children: Snippet;
  }
  
  let {
    size = 'lg',
    class: className = '',
    children
  }: Props = $props();
  
  const sizeMap = {
    sm: 'max-w-2xl',
    md: 'max-w-4xl',
    lg: 'max-w-6xl',
    xl: 'max-w-7xl',
    full: 'max-w-full'
  };
  
  const sizeClass = sizeMap[size];
  const classes = `container mx-auto px-4 sm:px-6 lg:px-8 ${sizeClass} ${className}`.trim();
</script>

<div class={classes}>
  {@render children()}
</div>
