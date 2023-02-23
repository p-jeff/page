<script>
	export let portrait;
</script>

{#if portrait}
	<div class="text">
		I write about ideas and my work process on my blog, check it out.
		<br /><button onclick="window.location.href='https://blog.lotze.xyz';">Go to Blog →</button>
	</div>
{:else}
	<div class="container">
		<div class="text">
			I write about ideas and my work process on my blog, here you find a list of recent posts.
			<br /><button onclick="window.location.href='https://blog.lotze.xyz/';">Go to Blog →</button>
		</div>
		<iframe src="https://blog.lotze.xyz/archive" title="blog" />
	</div>
{/if}

<style>
	.container {
		width: 100vw;
		height: 70vh;
		display: grid;
		grid-template-columns: 40vw 60vw;
		overflow-x: hidden;
		font-family: 'Josefin sans', serif;
	}

	.text {
		grid-column: 1/1;
		align-self: center;
		margin-left: 2%;
		font-size: 4vh;
		font-weight: 200;
		color: #6c6d57;
		margin-top: 2%;
	}

	button {
		font-family: 'Josefin sans', serif;
		display: block;
		margin-top: 5%;
		padding: 3%;
		font-size: 2vh;
		border: 1px solid;
		border-radius: 9999px;
		min-width: 8rem;
		text-align: center;
		background-color: #fefeef;
		color: #6c6d57;
	}

	button:hover {
		background-color: #6c6d57;
		color: #fefeef;
	}

	iframe {
		grid-column: 2/2;
		width: 102%;
		height: 100%;
		border: 0cm;

		scrollbar-width: thin;
		-webkit-scrollbar: none;
	}
</style>
