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

<svelte:window bind:innerHeight bind:innerWidth />

{#if !portait}
	<Landscape />
{:else}
	<Portrait />
{/if}
