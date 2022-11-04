<script>
	import * as THREE from 'three';
	import * as SC from 'svelte-cubed';
	import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
	import { onMount } from 'svelte';
	import { MeshNormalMaterial, PointLight, SpotLightHelper } from 'three';

	const modelURL = 'stars.obj';
	let model = null;

	function loadOBJ(url) {
		const loader = new OBJLoader();
		return loader.loadAsync(url);
	}

	onMount(() => {
		loadOBJ(modelURL).then((_model) => (model = _model.children[0].geometry));
	});

	let spin = 0;

	SC.onFrame(() => {
		spin += 0.002;
	});
</script>

<SC.Canvas alpha={true} antialias shadows={true}>
	{#if model}
		{@debug model}
		<SC.Mesh
			geometry={new THREE.TorusKnotGeometry(0.5, 0.2, 500, 16)}
			scale={[1, 1, 1]}
			material={new THREE.MeshNormalMaterial()}
			rotation={[spin, spin, -spin]}
		/>
	{/if}

	<SC.PerspectiveCamera position={[1, 1, 3]} />
	<SC.OrbitControls enableZoom={true} enablePan={false} />
	<SC.PointLight position={[1, 1, 0]} intensity={2} />
</SC.Canvas>
