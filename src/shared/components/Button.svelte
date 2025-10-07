<script lang="ts">
  import type { Snippet } from 'svelte';
  
  type ButtonVariant = 'primary' | 'secondary' | 'accent' | 'ghost' | 'outline';
  type ButtonSize = 'sm' | 'md' | 'lg';
  
  interface Props {
    variant?: ButtonVariant;
    size?: ButtonSize;
    href?: string;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    glow?: boolean;
    class?: string;
    onclick?: () => void;
    children: Snippet;
  }
  
  let {
    variant = 'primary',
    size = 'md',
    href,
    type = 'button',
    disabled = false,
    glow = false,
    class: className = '',
    onclick,
    children
  }: Props = $props();
  
  const baseClasses = 'btn font-semibold transition-all';
  const variantClass = variant !== 'outline' ? `btn-${variant}` : 'glass-effect-light border-primary/50 text-white hover:bg-white/20 hover:border-primary';
  const sizeClass = `btn-${size}`;
  const glowClass = glow ? 'glow-primary hover:scale-105' : '';
  
  const classes = `${baseClasses} ${variantClass} ${sizeClass} ${glowClass} ${className}`.trim();
</script>

{#if href}
  <a {href} class={classes}>
    {@render children()}
  </a>
{:else}
  <button {type} {disabled} {onclick} class={classes}>
    {@render children()}
  </button>
{/if}
