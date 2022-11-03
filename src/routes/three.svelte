<script>
	import * as THREE from 'three';
	import * as SC from 'svelte-cubed';
	import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
	import { TextureLoader } from 'three';
	import { afterUpdate, beforeUpdate, onMount } from 'svelte';

	export let current;
	export let color;
	export let zoom;
	let model, fiveTone;

	function loadOBJ(url) {
		const loader = new OBJLoader();
		return loader.loadAsync(url);
	}

	function loadGradient() {
		const textureLoader = new TextureLoader();
		fiveTone = textureLoader.load('fiveTone.jpg');
		fiveTone.minFilter = THREE.NearestFilter;
		fiveTone.magFilter = THREE.NearestFilter;
	}
	onMount(() => {
		loadGradient();
	});

	beforeUpdate(() => {
		loadOBJ(current).then((_model) => (model = _model.children[0].geometry));
	});

	let spin = 0;

	SC.onFrame(() => {
		spin += 0.002;
	});
</script>

<SC.Canvas alpha={true} antialias>
	{#if model}
		<SC.Mesh
			geometry={model}
			material={new THREE.MeshToonMaterial({
				color: new THREE.Color(color),
				gradientMap: fiveTone
			})}
			scale={zoom}
			rotation={[0.3, spin, spin]}
		/>
	{/if}

	<SC.PerspectiveCamera position={[1, 1, 3]} />
	<SC.OrbitControls enableZoom={true} enablePan={false} />
	<SC.PointLight intensity={1.5} position={[0, 5, 5]} />
</SC.Canvas>
