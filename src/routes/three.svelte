<script>
	import * as THREE from 'three';
	import * as SC from 'svelte-cubed';
	import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
	import { TextureLoader } from 'three';
	import { beforeUpdate, onMount } from 'svelte';

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
			material={new THREE.MeshNormalMaterial({})}
			scale={zoom}
			rotation={[0.3, spin, 0]}
		/>
	{/if}

	<SC.PerspectiveCamera position={[1, 1, 3]} />
	<SC.OrbitControls enableZoom={true} enablePan={false} />
	<SC.DirectionalLight intensity={0.8} position={[0, 5, 5]} />
</SC.Canvas>
