<script>
	export let portrait;
</script>

{#if portrait}
	<p class="summary">
		Design student with a focus on human interaction and cooperation with technology. Main interests
		are in artificial intelligence and emerging technologies, their societal implications and
		possibilities. Striving for opportunities to learn about them in applied contexts.
	</p>

	<ul>
		<p>Exhibitions</p>
		<li>
			Die Erde, ein dynamischer Planet<br /> Natural History Museum<br /> since February 2023, Vienna
		</li>
		<li>Angewandte Festival 2021 <br /> University of Applied Arts <br /> June 2021, Vienna</li>
		<li>Angewandte Festival 2022<br /> University of Applied Arts <br /> June 2022, Vienna</li>
	</ul>

	<ul>
		<p>Experience</p>
		<li>
			Turning the Ecological Gears <br /> Exhibitions Technical Lead <br />Vienna, October 2022
		</li>
		<li>
			Design Invetigations <br />
			Rapid Prototyping, Student Assistant <br />
			Vienna, 2021-2022
		</li>
		<li>"Zarewna" <br /> Fashion Brand, Founder <br /> Hamburg – Since 2019</li>
	</ul>
	<ul>
		<button onclick="window.location.href='CV_LOTZE_27012023.pdf';">Complete CV</button>
		<br />
		<button onclick="window.location.href='https://www.instagram.com/johannesfelixlotze/';">
			Instagram</button
		> <br />
		<button onclick="window.location.href='https://github.com/p-jeff';"> GitHub</button>
	</ul>
{:else}
	<div class="container">
		<p class="summary">
			Design student with a focus on human interaction and cooperation with technology. Main
			interests are in artificial intelligence and emerging technologies, their societal
			implications and possibilities. Striving for opportunities to learn about them in applied
			contexts.
		</p>
		<ul class="exhibitions">
			<p>Exhibitions</p>
			<li>
				Die Erde, ein dynamischer Planet<br /> Natural History Museum<br /> since February 2023, Vienna
			</li>
			<li>Angewandte Festival 2021 <br /> University of Applied Arts <br /> June 2021, Vienna</li>
			<li>Angewandte Festival 2022<br /> University of Applied Arts <br /> June 2022, Vienna</li>
		</ul>
		<ul class="experience">
			<p>Experience</p>
			<li>
				Turning the Ecological Gears <br /> Exhibitions Technical Lead <br />Vienna, October 2022
			</li>
			<li>
				Design Invetigations <br />
				Rapid Prototyping, Student Assistant <br />
				Vienna, 2021-2022
			</li>
			<li>"Zarewna" <br /> Fashion Brand, Founder <br /> Hamburg – Since 2019</li>
		</ul>
		<ul class="buttons">
			<button onclick="window.location.href='CV_LOTZE_27012023.pdf';">Complete CV</button>
			<br />
			<button onclick="window.location.href='https://www.instagram.com/johannesfelixlotze/';">
				Instagram</button
			> <br />
			<button onclick="window.location.href='https://github.com/p-jeff';"> GitHub</button>
			<br />
			<button onclick="window.location.href='https://vimeo.com/user128655280';"> Vimeo</button>
			<br /> <br /> <br />
			<a class="button" href="mailto:lotzejohannes@gmail.com"> Mail</a>
		</ul>
	</div>
{/if}

<style>
	.container {
		width: 100vw;
		height: 70vh;
		display: grid;
		grid-template-columns: 33.3vw 33.3vw 33.3vw;
		grid-template-rows: 20vh 50vh;
	}

	p {
		margin-left: 2%;
		max-width: 80vw;
		font-family: Lustria;
		color: #6c6d57;
		font-size: 3vh;
	}

	li {
		font-family: Lustria;
		color: #6c6d57;
		font-size: 2vh;
		margin: 2%;
	}
	.summary {
		margin-bottom: 0%;
		grid-row: 1/1;
		grid-column: 1/4;
	}

	.exhibitions {
		grid-row: 2/2;
		grid-column: 1/1;
	}
	.experience {
		grid-row: 2/2;
		grid-column: 2/2;
	}

	button {
		font-family: 'Josefin sans', serif;
		margin-top: 5%;
		padding: 3%;
		font-size: 2vh;
		border: 1px solid;
		border-radius: 9999px;
		min-width: 8rem;
		text-align: center;
		background-color: #fefeef;
		color: #6c6d57;
		max-width: fit-content;
		max-height: 6vh;
	}

	a {
		font-family: 'Josefin sans', serif;
		margin-top: 5%;
		padding: 3%;
		font-size: 2vh;
		border: 1px solid;
		border-radius: 9999px;
		min-width: 8rem;
		text-align: center;
		background-color: #fefeef;
		color: #6c6d57;
		max-width: fit-content;
		max-height: 6vh;
		text-decoration: none;
	}

	button:hover {
		background-color: #6c6d57;
		color: #fefeef;
	}

	a:hover {
		background-color: #6c6d57;
		color: #fefeef;
	}
</style>
