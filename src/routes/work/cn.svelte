<script>
	let hover = false;

	function mouseOver() {
		hover = true;
	}
	function mouseLeave() {
		hover = false;
	}
	function handleClick() {
		window.open('http://collectively-narrated.xyz/', '_blank');
	}
</script>

<div
	style="position:relative;width:90%;margin:2%;height:300px"
	on:mouseover={mouseOver}
	on:mouseleave={mouseLeave}
	on:click={handleClick}
>
	{#if !hover}
		<img src="image/contentImage/cn3.png" alt="" />
		<h1>Visit on Web &<br />Listen to Audio</h1>
	{:else}
		<h1>Visit on Web &<br />Listen to Audio</h1>
		<img src="image/contentImage/cn3.png" alt="" />
	{/if}
</div>

<style>
	h1 {
		color: #7015ad;
		margin: auto;
		position: absolute;
		top: 40%;
		left: 50%;
		z-index: 2;
		pointer-events: none;
	}
	div:hover {
		opacity: 0.5;
		cursor: pointer;
	}
	img {
		max-width: 90%;
		max-height: 100%;
	}
</style>
