<script>
	import '../styles.css';
	import Menu from './work/menu.svelte';
	import Blog from './blog.svelte';
	import About from './about.svelte';
	import PortraitOld from './work/portrait_old.svelte';
</script>

<svelte:head>
	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Josefin+Sans" />
	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lustria" />
</svelte:head>

<div class="overflow">
	<div class="container">
		<p>Hey, i am</p>
		<p>Johannes Felix Lotze</p>
		<p>I create narratives, concepts <br />and build experiences.</p>
		<p>Welcome to my little plot online.</p>
		<h3>↓</h3>
	</div>

	<h1>Selected Works</h1>
	<PortraitOld />
	<h1>Blog</h1>
	<Blog portrait={true} />
	<h1>About</h1>
	<About portrait={true} />
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
		height: 87vh;
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
		margin-top: 5vh;
		padding-left: 1%;
		font-size: 10vh;
		font-weight: 400;
		margin-bottom: 0%;
		color: #6c6d57;
		font-style: italic;
		font-family: 'Josefin sans', serif;
		text-shadow: -1px -1px 1px rgba(255, 255, 255, 0.1), 1px 1px 1px rgba(0, 0, 0, 0.5);
		border-bottom: 0.5vh dotted #6c6d57;
	}

	h3 {
		font-size: 3vh;
		font-weight: 200;
		color: #6c6d57;
	}
</style>
