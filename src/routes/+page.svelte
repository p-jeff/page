<script>
	import Footer from './footer.svelte';
</script>

<div>
	<div class="prev"><img src="image.png" alt="img" class="prev" /></div>
	<div class="current">
		<img src="image.png" alt="" class="current" />
	</div>
	<div class="next">
		<img src="image.png" alt="" class="next" />
	</div>
</div>
<Footer />

<style>
	div {
		display: grid;
		grid-template-columns: 10vw 80vw 10vw;
		grid-row: 88vh;
	}
	img.current {
		max-width: 100%;
		height: auto;
	}
	.current {
		grid-column: 2/2;
		display: flex;
		align-items: center;
		height: 88vh;
		z-index: 2;
	}
	.prev {
		grid-column: 1/1;
		display: flex;
		align-items: center;
		opacity: 70%;
		height: 88vh;
		z-index: 1;
	}
	img.prev {
		max-height: 50%;
	}
	.next {
		grid-column: 3/3;
		display: flex;
		align-items: center;
		opacity: 70%;
		height: 88vh;
		z-index: 1;
	}
	img.next {
		max-height: 50%;
	}
</style>
