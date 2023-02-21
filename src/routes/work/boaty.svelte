<script>
	let hover = false;

	function mouseOver() {
		hover = true;
	}
	function mouseLeave() {
		hover = false;
	}
	function handleClick() {
		window.open('https://p-jeff.github.io/McBoaty/', '_blank');
	}
</script>

<div
	style="position:relative;width:95%;margin:2%;height:300px"
	on:mouseover={mouseOver}
	on:mouseleave={mouseLeave}
	on:click={handleClick}
>
	{#if !hover}
		<iframe
			src="https://p-jeff.github.io/McBoaty/"
			style="position:absolute;top:0;left:0;width:100%;height:100%;"
			title="vid"
		/>
	{:else}
		<h1>Visit on Web</h1>
		<div class="bg" />
		<iframe
			src="https://p-jeff.github.io/McBoaty/"
			style="position:absolute;top:0;left:0;width:100%;height:100%;"
			title="vid"
		/>
	{/if}
</div>

<style>
	h1 {
		color: #fefeef;
		margin: auto;
		position: absolute;
		top: 50%;
		left: 30%;
		z-index: 2;
		pointer-events: none;
	}
	div:hover {
		opacity: 0.5;
		cursor: pointer;
	}
	iframe {
		pointer-events: none;
	}
</style>
