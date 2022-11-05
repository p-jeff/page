<script>
	import { createEventDispatcher, onMount } from 'svelte';
	import Entry from './entry.svelte';
	import Three from './three.svelte';

	const dispatch = createEventDispatcher();
	let selected, next, prev, hover;

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
			name: selected.name,
			tag: selected.tag
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
			image: '/image/image.jpg',
			tag: '2022, Public Space',
			color: '#D1CCC9',
			model: 'vest.obj',
			material: '#FA6B00',
			zoom: [0.015, 0.015, 0.015],
			content: {
				text: 'Human interaction has come down to a minimum in this new world of rushing coats, hurrying boots, and covered faces. In the modern metropolis, public space is for commuting, getting you from here to there as streamlined as possible. Where it is not, relaxation is planned, mandated, and structured. Ownership is oblivious. Care not given. Lines are blurred. We rarely talk to people we do not know. We all are stuck in our worlds. Bursting the proverbial bubble is no small task. Directly taking on the ever-growing isolation would be bold and arguably naive, so we start smaller and try and talk to people— seemingly simple. The event "_____, Collectively Narrated" aims to facilitate random interactions again by offering a community and space-focused event. It allows passersby to partake in the building of objects. We are not building the object to complete public space; we want to involve people and hear what they say. Talking to people and recording their stories and thoughts on a space gives a representative core sample of the area. Their stories are then displayed on the respective objects, allowing people to understand the objects and gain a deeper understanding of space and the people that inhabit it.',
				credit:
					'Together with Miriam Daxl, Shannon McLachlan and Stephan Sinn @ Design Investigations, die Angewandte, Vienna, Austria 2022',
				images: ['/image/amI.jpg', '/image/amI.jpg', '/image/amI.jpg']
			}
		},
		{
			id: 2,
			name: 'Am I Gaboniontum?',
			image: '/image/amI.jpg',
			tag: '2022, Installation',
			color: '#3C3288',
			model: 'gaboni.obj',
			material: '#B66DC6',
			zoom: [0.08, 0.08, 0.08],
			content: {
				text: 'BussiBaba',
				credit: 'meBITCH',
				images: ['/image/amI.jpg', '/image/amI.jpg', '/image/amI.jpg']
			}
		},
		{
			id: 3,
			name: 'Cash from Crisis',
			image: '/image/ss.jpg',
			tag: '2021, Film',
			color: '#732817',
			model: 'sweeper.obj',
			material: '#EA9A55',
			zoom: [0.015, 0.015, 0.015],
			content: {
				text: 'BussiBaba',
				credit: 'meBITCH',
				images: ['/image/amI.jpg', '/image/amI.jpg', '/image/amI.jpg']
			}
		},
		{
			id: 4,
			name: 'KI_tchen',
			image: '/image/kitchen.jpg',
			tag: '2021, Installation',
			color: '#756F6A',
			model: 'cow.obj',
			material: '#480703',
			zoom: [3.2, 3.2, 3.2],
			content: {
				text: 'BussiBaba',
				credit: 'meBITCH',
				images: ['/image/amI.jpg', '/image/amI.jpg', '/image/amI.jpg']
			}
		},
		{
			id: 5,
			name: 'McBoaty',
			image: '/image/boaty.jpg',
			tag: '2022, Creative Coding',
			color: '#667689',
			model: 'sun.obj',
			material: '#F3AA3A',
			zoom: [0.01, 0.01, 0.01],
			content: {
				text: 'BussiBaba',
				credit: 'meBITCH',
				images: ['/image/amI.jpg', '/image/amI.jpg', '/image/amI.jpg']
			}
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
	<div
		class="current"
		on:mouseenter={() => {
			hover = true;
		}}
		on:mouseleave={() => {
			hover = false;
		}}
	>
		{#if hover}
			<div class="entry current"><Entry title={selected.name} content={selected.content} /></div>
		{:else}
			<img src={selected.image} alt="" class="current" style="--shadowcolor: {selected.color}" />
		{/if}
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

	{#if !hover}
		<div class="threeContainer">
			<div class="threeWrapper">
				<Three current={selected.model} color={selected.material} zoom={selected.zoom} />
			</div>
		</div>
	{/if}
</div>

<svelte:window on:keydown={handleKeydown} on:mousewheel={handleScroll} />

<style>
	.entry {
		width: 100%;
		height: 90%;
		background-color: #181619;
	}
	div {
		display: grid;
		grid-template-columns: 10vw 80vw 10vw;
		grid-template-rows: 88vh;
	}
	.threeContainer {
		grid-column: 2/2;
		grid-row: 1/1;
		z-index: 3;
		display: grid;
		grid-template-columns: 40vw 40vw;
		grid-template-rows: 42vh 60vh;
		pointer-events: none;
	}

	.threeWrapper {
		position: relative;
		grid-row: 2/2;
		grid-column: 2/2;
	}

	img.current {
		max-width: 100%;
		max-height: 90%;
		height: auto;
		margin: auto;
		box-shadow: var(--shadowcolor) 1px 1px 20px -2px;
	}
	.current {
		grid-column: 2/2;
		display: flex;
		align-items: center;
		height: 88vh;
		z-index: 2;
		grid-row: 1/1;
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
