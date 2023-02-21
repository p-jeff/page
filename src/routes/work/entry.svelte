<script>
	export let content;
	export let title;
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
		grid-column: 2/2;
		grid-row: 1/1;
		color: #6c6d57;
		margin-top: 0%;
		font-weight: 400;
		text-align: right;
		font-size: 5vh;
	}
	.text {
		grid-column: 2/2;
		grid-row: 2/2;
		color: #6c6d57;
		overflow-y: auto;
		-ms-overflow-style: none; /* IE and Edge */
		/* Firefox */
		scrollbar-width: thin;
		scrollbar-color: rgb(92, 92, 92) #fefeef;
		font-weight: 400;
		margin: 2%;
		font-family: 'Lustria';
	}
	.gallery {
		grid-column: 1/2;
		grid-row: 2/3;
		overflow-y: auto;
		/* Firefox */
		scrollbar-width: thin;
		scrollbar-color: rgb(92, 92, 92) #fefeef;
	}
	.gallery::-webkit-scrollbar {
		display: none;
	}
	img {
		max-height: 50vh;
		margin: 2%;
		width: 95%;
	}

	p {
		font-size: 20px;
	}
</style>
