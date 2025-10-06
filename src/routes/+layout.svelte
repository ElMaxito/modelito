<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<script>
		document.documentElement.setAttribute('data-theme', 'luxury');
	</script>
</svelte:head>

{@render children?.()}
