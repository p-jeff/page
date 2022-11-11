<script>
	import { DecrementWrapStencilOp } from 'three';
	import Entry from './entry.svelte';
	import Footer from './footer.svelte';
	import Gltf from './gltf.svelte';
	import Menu from './menu.svelte';
	import Three from './three.svelte';

	let name, tag;
	function handleEvent(event) {
		console.log(event);
		name = event.detail.name;
		tag = event.detail.tag;
	}

	let selected = {
		id: 1,
		name: 'Collectively Narrated',
		image: '/image/image.jpg',
		tag: '2022, Public Space',
		color: '#D1CCC9',
		model: 'vest.obj',
		material: '#FA6B00',
		zoom: [0.01, 0.01, 0.01],
		content: {
			text: 'BussiBaba',
			credit: 'meBITCH',
			images: ['/image/amI.jpg', '/image/amI.jpg', '/image/amI.jpg']
		}
	};

	/*<Menu on:title={handleEvent} />
<Footer {name} {tag} />*/
</script>

<Menu on:title={handleEvent} />
<Footer {name} {tag} />
