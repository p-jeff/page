<script>
	import { each } from 'svelte/internal';

	export let img;
	export let images;
	export let text;
	export let credit;
</script>

<div class="container">
	<img src={img} alt="" />
	<p>{text}</p>
	{#each images as image}
		<img src={image} alt="" />
	{/each}
	<p>{credit}</p>
</div>

<style>
	.container {
		height: 90vh;
		width: 100vw;
		margin-top: 5vh;
		overflow-y: scroll;
	}

	img {
		max-width: 100vw;
		max-height: 80vh;
	}

	p {
		color: #fefeef;
		text-align: right;
		margin-left: 2%;
	}
</style>
