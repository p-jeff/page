<script>
	import * as THREE from 'three';
	import * as SC from 'svelte-cubed';
	import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
	import { onMount } from 'svelte';

	const modelURL = 'rework.obj';
	let model;

	function loadOBJ() {
		const loader = new OBJLoader();
		return loader.loadAsync(modelURL);
	}
	onMount(() => {
		loadOBJ().then((_model) => (model = _model.children[0].geometry));
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
			material={new THREE.MeshNormalMaterial({ transparent: true, opacity: 1 })}
			scale={[0.015, 0.015, 0.015]}
			rotation={[0.3, spin, spin]}
		/>
	{/if}

	<SC.PerspectiveCamera position={[1, -1, 3]} />
	<SC.OrbitControls enableZoom={true} enablePan={false} />
	<SC.DirectionalLight intensity={1} position={[0, 0, 5]} />
</SC.Canvas>
