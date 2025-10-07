<script lang="ts">
  import type { Snippet } from 'svelte';
  
  type IconBoxVariant = 'primary' | 'secondary' | 'accent' | 'brand';
  type IconBoxSize = 'sm' | 'md' | 'lg' | 'xl';
  
  interface Props {
    variant?: IconBoxVariant;
    size?: IconBoxSize;
    glow?: boolean;
    rounded?: 'lg' | 'xl' | '2xl';
    class?: string;
    children: Snippet;
  }
  
  let {
    variant = 'brand',
    size = 'md',
    glow = false,
    rounded = '2xl',
    class: className = '',
    children
  }: Props = $props();
  
  const sizeMap = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10 sm:w-12 sm:h-12',
    lg: 'w-14 h-14 sm:w-16 sm:h-16',
    xl: 'w-12 h-12 sm:w-16 sm:h-16'
  };
  
  const variantMap = {
    primary: 'bg-brand-gradient',
    secondary: 'bg-secondary',
    accent: 'bg-accent',
    brand: 'bg-brand-gradient'
  };
  
  const sizeClass = sizeMap[size];
  const variantClass = variantMap[variant];
  const roundedClass = `rounded-${rounded}`;
  const glowClass = glow ? (variant === 'primary' || variant === 'brand' ? 'glow-primary' : 'glow-accent') : '';
  
  const classes = `${sizeClass} ${variantClass} ${roundedClass} ${glowClass} flex items-center justify-center ${className}`.trim();
</script>

<div class={classes}>
  {@render children()}
</div>
