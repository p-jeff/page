<script>
	import { createEventDispatcher, onMount } from 'svelte';

	const dispatch = createEventDispatcher();
	let selected, next, prev;

	function changeSelection(direction) {
		if (direction === 'left') {
			content.push(selected);
			selected = content.shift();
			prev = content[0];
			next = content[content.length - 1];
		}
		if (direction === 'right') {
			content.unshift(selected);
			selected = content.pop();
			prev = content[0];
			next = content[content.length - 1];
		}
		content = content;
		tellTitle();
	}

	function tellTitle() {
		dispatch('title', {
			name: selected.name
		});
	}

	function handleKeydown(event) {
		if (event.key === 'ArrowRight') {
			changeSelection('right');
		}
		if (event.key === 'ArrowLeft') {
			changeSelection('left');
		}
	}

	function handleScroll(event) {
		if (event.deltaX > 0) {
			changeSelection('left');
		} else if (event.deltaX < 0) {
			changeSelection('right');
		}
	}

	let content = [
		{
			id: 1,
			name: 'Collectively Narrated',
			image: '/image/image.jpg'
		},
		{
			id: 2,
			name: 'Am I Gaboniontum?',
			image: '/image/amI.jpg'
		},
		{
			id: 3,
			name: 'Cash from Crisis',
			image: '/image/ss.jpg'
		},
		{
			id: 4,
			name: 'KI_tchen',
			image: '/image/kitchen.jpg'
		}
	];

	selected = content.pop();
	prev = content[content.length - 1];
	next = content[0];

	onMount(() => {
		tellTitle();
		changeSelection('left');
	});
</script>

<div>
	<div
		class="prev"
		on:mousedown={() => {
			changeSelection('left');
		}}
	>
		<img src={prev.image} alt="img" class="prev" />
		<p>&lt;</p>
	</div>
	<div class="current">
		<img src={selected.image} alt="" class="current" />
	</div>
	<div
		class="next"
		on:mousedown={() => {
			changeSelection('right');
		}}
	>
		<img src={next.image} alt="" class="next" />
		<p>&gt;</p>
	</div>
</div>

<svelte:window on:keydown={handleKeydown} on:mousewheel={handleScroll} />

<style>
	div {
		display: grid;
		grid-template-columns: 10vw 80vw 10vw;
		grid-row: 88vh;
	}
	img.current {
		max-width: 100%;
		max-height: 80%;
		height: auto;
		margin: auto;
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
		display: grid;
		align-items: center;
		opacity: 70%;
		height: 88vh;
		z-index: 1;
		text-align: center;
	}
	img.prev {
		max-height: 50%;
		grid-area: 1/1;
	}
	.next {
		grid-column: 3/3;
		display: grid;
		align-items: center;
		opacity: 70%;
		height: 88vh;
		z-index: 1;
		text-align: center;
	}
	img.next {
		max-height: 50%;
		margin-left: -100%;
		grid-area: 1/1;
	}
	p {
		grid-area: 1/1;
		z-index: 2;
		font-size: xx-large;
		color: #fefeef;
		grid-area: 1/1;
	}
	:hover {
		opacity: 1;
	}
</style>
