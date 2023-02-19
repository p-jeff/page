<script>
	import '../styles.css';
	import Menu from './work/menu.svelte';
</script>

<svelte:head>
	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Josefin+Sans" />
	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lustria" />
</svelte:head>

<div class="overflow">
	<div class="container">
		<p>Hey, i am</p>
		<p>Johannes Felix Lotze</p>
		<p>I study Speculative Design</p>
		<p>Welcome to my little plot online.</p>
		<h3>(keep scrolling)</h3>
	</div>

	<h1>Selected Works</h1>
	<Menu />
	<h1>Blog</h1>
	<h1>About</h1>
</div>

<style>
	.overflow {
		width: 100vw;
		height: 100vh;
		overflow-y: scroll;
		overflow-x: hidden;
		/* Firefox */
		scrollbar-width: none;
	}
	.container {
		width: 100vw;
		height: 90vh;
		display: grid;
		justify-content: center;
		align-content: center;
		text-align: center;
		font-size: 4vh;
		color: #6c6d57;
		font-family: 'Lustria', serif;
	}

	p {
		margin: 1%;
	}

	a {
		margin: 1%;
	}

	h1 {
		margin-top: 3vh;
		padding-left: 1%;
		font-size: 15vh;
		font-weight: 400;
		margin-bottom: 0%;
		color: #6c6d57;
		font-style: italic;
		font-family: 'Josefin sans', serif;
		text-shadow: -1px -1px 1px rgba(255, 255, 255, 0.1), 1px 1px 1px rgba(0, 0, 0, 0.5);
		border-bottom: 0.5vh dotted #6c6d57;
	}

	h3 {
		font-size: 2vh;
		font-weight: 200;
	}
</style>
