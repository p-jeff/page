<script>
	import { DecrementWrapStencilOp } from 'three';
	import Footer from './footer.svelte';
	import Menu from './menu.svelte';

	let name;
	function handleEvent(event) {
		console.log(event);
		name = event.detail.name;
	}
</script>

<Menu on:title={handleEvent} />
<Footer {name} />

<style>
</style>
