<script>
	import * as THREE from 'three';
	import * as SC from 'svelte-cubed';
	import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
	import { onMount } from 'svelte';
	import { MeshNormalMaterial, PointLight, SpotLightHelper } from 'three';

	const modelURL = 'spacebear.glb';
	let model = null;

	function loadGLTF(url) {
		const loader = new GLTFLoader();
		return loader.loadAsync(url);
	}

	onMount(() => {
		loadGLTF(modelURL).then((_model) => (model = _model));
	});

	let spin = 0;

	SC.onFrame(() => {
		spin += 0.002;
	});
</script>

<SC.Canvas alpha={true} antialias shadows={true}>
	{#if model}
		<SC.Primitive object={model.scene} scale={[0.05, 0.05, 0.05]} />
	{/if}

	<SC.PerspectiveCamera position={[1, 1, 3]} />
	<SC.OrbitControls enableZoom={true} enablePan={false} />
	<SC.PointLight position={[1, 1, 0]} intensity={2} />
</SC.Canvas>
