<script lang="ts">
  import Card from './Card.svelte';
  import IconBox from './IconBox.svelte';

  interface Props {
    icon: any; // Lucide icon component
    title: string;
    description: string;
    variant?: 'primary' | 'secondary' | 'accent';
  }

  let { icon: Icon, title, description, variant = 'primary' }: Props = $props();
</script>

<Card hover class="group">
  <IconBox {variant} size="lg" glow class="mb-6 group-hover:scale-110 transition-transform">
    <Icon class="w-7 h-7 sm:w-8 sm:h-8 text-white" />
  </IconBox>
  <h3 class="text-xl sm:text-2xl font-bold mb-4">{title}</h3>
  <p class="text-gray-400 leading-relaxed">{description}</p>
</Card>
