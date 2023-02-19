<script>
	import { onMount } from 'svelte';

	export let name;
	export let tag;
	let date = new Date();
	$: time = date.toLocaleTimeString();

	onMount(() => {
		setInterval(() => {
			date = new Date();
		}, 1000);
	});
</script>

<div>
	<h1 class="left">{time}</h1>
	<h1 class="center">{name}</h1>
	<a class="right" href="/">Johannes Felix Lotze</a>
	<h1 class="bottom">{tag}</h1>
</div>

<style>
	div {
		display: grid;
		grid-template-columns: 20vw 60vw 20vw;
		grid-template-rows: 6vh 3vh 3vh;
		width: 100%;
		margin: 0%;
		padding: 0%;
		position: absolute;
		bottom: 0%;
		color: #6c6d57;
		align-items: center;
	}

	h1 {
		font-size: 3vh;
	}

	a {
		text-decoration: none;
		font-size: 3vh;
		color: #6c6d57;
	}

	.center {
		text-align: center;
		grid-column: 2/2;
		grid-row: 1/2;
		font-size: 5vh;
	}
	.right {
		grid-column: 3/3;
		margin-right: 1%;
		grid-row: 2/3;
		text-align: center;
	}
	.left {
		grid-column: 1/1;
		text-align: left;
		margin-left: 1%;
		margin-bottom: 1%;
		grid-row: 2/3;
		text-align: center;
	}
	.bottom {
		grid-column: 2/2;
		grid-row: 3/3;
		font-size: 20px;
		text-align: center;
	}
</style>
