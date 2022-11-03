<script>
	import { onMount } from 'svelte';
	import '../styles.css';

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
	<h1 class="right">Johannes Felix Lotze</h1>
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
		color: #fefeef;
		align-items: center;
	}

	h1 {
		font-size: 3vh;
	}
	.center {
		text-align: center;
		grid-column: 2/2;
		grid-row: 1/2;
		font-size: 5vh;
	}
	.right {
		grid-column: 3/3;
		text-align: end;
		margin-right: 1%;
		grid-row: 2/3;
	}
	.left {
		grid-column: 1/1;
		text-align: left;
		margin-left: 1%;
		margin-bottom: 1%;
		grid-row: 2/3;
	}
	.bottom {
		grid-column: 2/2;
		grid-row: 3/3;
		font-size: 20px;
		text-align: center;
	}
</style>
