<script>
	import { onMount } from 'svelte';
	import Footer from './footer.svelte';
	import Menu from './menu.svelte';
	import Portrait from './portrait.svelte';

	let innerHeight, innerWidth, portait;
	onMount(() => {
		portait = innerHeight > innerWidth;
	});

	let name, tag;
	function handleEvent(event) {
		console.log(event);
		name = event.detail.name;
		tag = event.detail.tag;
	}

	/*<Menu on:title={handleEvent} />
<Footer {name} {tag} />*/
	console.log(portait);
</script>

<svelte:window bind:innerHeight bind:innerWidth />

{#if !portait}
	<Menu on:title={handleEvent} />
	<Footer {name} {tag} />
{:else}
	<Portrait />
{/if}
