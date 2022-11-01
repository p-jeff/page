<script>
	import { onMount } from 'svelte';
	import '../styles.css';

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
	<h1 class="center">PROJECT TITLE</h1>
	<h1 class="right">Johannes Felix Lotze</h1>
</div>

<style>
	div {
		display: grid;
		grid-template-columns: 30vw 40vw 30vw;
		grid-template-rows: 12vh;
		width: 100%;
		margin: 0%;
		padding: 0%;
		position: absolute;
		bottom: 0%;
		color: #fefeef;
	}

	h1 {
		font-size: 4vh;
	}
	.center {
		text-align: center;
		grid-column: 2/2;
	}
	.right {
		grid-column: 3/3;
		text-align: end;
		margin-right: 1%;
	}
	.left {
		grid-column: 1/1;
		text-align: left;
		margin-left: 1%;
		margin-bottom: 1%;
	}
</style>
