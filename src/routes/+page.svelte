<script>
	import { DecrementWrapStencilOp } from 'three';
	import Footer from './footer.svelte';
	import Menu from './menu.svelte';
	import Three from './three.svelte';

	let name, tag;
	function handleEvent(event) {
		console.log(event);
		name = event.detail.name;
		tag = event.detail.tag;
	}
</script>

<Menu on:title={handleEvent} />
<Footer {name} {tag} />
