<script lang="ts">
	import '../app.css';
	import favicon from '$shared/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" type="image/svg+xml" href={favicon} />
	<script>
		document.documentElement.setAttribute('data-theme', 'luxury');
	</script>
</svelte:head>

{@render children?.()}
