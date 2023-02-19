<script>
	import '../../styles.css';

	import { onMount } from 'svelte';

	import Landscape from './landscape.svelte';

	import Portrait from './portrait.svelte';

	let innerHeight, innerWidth, portait;
	onMount(() => {
		portait = innerHeight > innerWidth;
	});
</script>

<svelte:head>
	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Josefin+Sans" />
</svelte:head>

<svelte:window bind:innerHeight bind:innerWidth />

{#if !portait}
	<Landscape />
{:else}
	<Portrait />
{/if}
