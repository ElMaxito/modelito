<script lang="ts">
  import type { Snippet } from 'svelte';
  
  interface Props {
    variant?: 'glass' | 'glass-light';
    rounded?: 'xl' | '2xl' | '3xl';
    padding?: 'sm' | 'md' | 'lg';
    hover?: boolean;
    class?: string;
    children: Snippet;
  }
  
  let {
    variant = 'glass',
    rounded = '3xl',
    padding = 'md',
    hover = false,
    class: className = '',
    children
  }: Props = $props();
  
  const variantClass = variant === 'glass' ? 'glass-effect' : 'glass-effect-light';
  const roundedClass = `rounded-${rounded}`;
  const paddingMap = {
    sm: 'p-4',
    md: 'p-6 sm:p-8',
    lg: 'p-8 sm:p-12 md:p-16'
  };
  const paddingClass = paddingMap[padding];
  const hoverClass = hover ? 'hover-lift' : '';
  
  const classes = `${variantClass} ${roundedClass} ${paddingClass} ${hoverClass} ${className}`.trim();
</script>

<div class={classes}>
  {@render children()}
</div>
