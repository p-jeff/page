<script>
	import Sweeper from './sweeper.svelte';
	export let content;
	export let title;
	export let custom;
</script>

<div class="layout">
	<h1>{title}</h1>
	<div class="text">
		<p>
			{content.text}
		</p>
		<p>
			{content.credit}
		</p>
	</div>

	<div class="gallery">
		<svelte:component this={content.component} />
		{#each content.images as image}
			<img src={image} alt="" />
		{/each}
	</div>
</div>

<style>
	.layout {
		display: grid;
		grid-template-columns: 50% 50%;
		grid-template-rows: 5% 95%;
		height: 80vh;
		width: 80vw;
	}
	h1 {
		grid-column: 1/2;
		grid-row: 1/1;
		color: #fefeef;
		margin-top: 0%;
	}
	.text {
		grid-column: 2/2;
		grid-row: 2/2;
		color: #fefeef;
	}
	.gallery {
		grid-column: 1/2;
		grid-row: 2/3;
		overflow-y: scroll;
		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none; /* Firefox */
	}
	.gallery::-webkit-scrollbar {
		display: none;
	}
	img {
		max-height: 50vh;
		margin: 2%;
		width: 90%;
	}
</style>
