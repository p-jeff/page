<script>
	import { createEventDispatcher, onMount } from 'svelte';
	import Boaty from './boaty.svelte';
	import Cn from './cn.svelte';
	import Entry from './entry.svelte';
	import Kitchen from './kitchen.svelte';
	import Sweeper from './sweeper.svelte';

	const dispatch = createEventDispatcher();
	let selected, next, prev, hover, three;

	function changeSelection(direction) {
		if (direction === 'left') {
			content.push(selected);
			selected = content.shift();
			three = selected.three;
			prev = content[0];
			next = content[content.length - 1];
		}
		if (direction === 'right') {
			content.unshift(selected);
			selected = content.pop();
			three = selected.three;
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
		if (event.key === 'Enter') {
			hover = !hover;
		}
	}

	function handleScroll(event) {
		if (event.deltaX > 0) {
			//changeSelection('left');
		} else if (event.deltaX < 0) {
			//changeSelection('right');
		}
	}

	let content = [
		{
			id: 6,
			name: '#GRWM: Preparing for tomorrow',
			image: 'image/grwm.jpg',
			tag: '2023, Multimedia Installation',
			color: '#667689',
			three: false,
			model: 'sun.obj',
			material: '#F3AA3A',
			zoom: [0.01, 0.01, 0.01],
			content: {
				text: "Narratives of certain futures have become a major marketing tool. Especially western capitalist future visions present themselves in a desireable way, while only representing a slim part of society. Negative visions are only presented as transitionary periods, since no decrease in living standart is acceptable. A given vision presents itself as the sole truth, relying on a belief in theoretical technological advancements to fill narrative gaps. There is no need for criticism since as soon a centain point of desire is reached, the capitalistic nature will solve itself and inequalities will become nonexistent, allowing humanity to continue at this point of desire in perpetuity.The Project uses the mundane concept of a morning routine and it's accompaniing products to give a glimpse into",
				credit:
					'Most of the thought process behind this Project can be found on my blog. Multimedia Installation,Project @ Design Investigations, University of Applied Arts Vienna, 2023',
				images: [
					'image/contentImage/grwm.jpg',
					'image/contentImage/grwm1.jpg',
					'image/contentImage/grwm2.jpg',
					'image/contentImage/grwm3.jpg',
					'image/contentImage/grwm4.jpg',
					'image/contentImage/grwm5.jpg',
					'image/contentImage/grwm6.jpg',
					'image/contentImage/grwm7.jpg',
					'image/contentImage/grwm8.jpg',
					'image/contentImage/grwm9.jpg'
				],
				custom: false
			}
		},
		{
			id: 1,
			name: 'Cash from Crisis',
			image: 'image/ss.jpg',
			tag: '2021, Film',
			color: '#732817',
			content: {
				text: "Crises always affect people's worries and needs, making them more susceptible to comforting claims, hoax products and lies. Energized water, placebo pills and DVDs with 60 minutes of a healing gaze are just a few examples showing how creative some “inventors” become to earn the extra dollar. As with many products that are promising the supernatural. An easy pseudoscientific alternative is offered in parallel to a scientific – but maybe uncomfortable – consens. These machinations boom during a crisis. Based on our observations, we set out and created a fictional venture in the field of pseudoscience. How do you make such a convincing alternative, how much function is too much, what are matters of belief, and perhaps most important how does one end up creating these systems? Mainly focusing on the user interaction and the associated effects on the body – we developed our very own fake health tool. A light-brush. We then incorporated the product and our results into a short film.",
				credit:
					'Together with Valentina Sturn and Leo Mühlfeld @ Design Investigations, die Angewandte, Vienna, Austria 2021',
				images: [
					'image/contentImage/cfc1.jpg',
					'image/contentImage/cfc2.jpg',
					'image/contentImage/cfc3.jpg',
					'image/contentImage/cfc4.jpg',
					'image/contentImage/cfc5.jpg'
				],
				custom: true,
				component: Sweeper
			}
		},
		{
			id: 3,
			name: 'Collectively Narrated',
			image: 'image/image.jpg',
			tag: '2022, Public Space',
			color: '#D1CCC9',
			three: false,
			content: {
				text: 'Human interaction has come down to a minimum in this new world of rushing coats, hurrying boots, and covered faces. In the modern metropolis, public space is for commuting, getting you from here to there as streamlined as possible. Where it is not, relaxation is planned, mandated, and structured. Ownership is oblivious. Care not given. Lines are blurred. We rarely talk to people we do not know. We all are stuck in our worlds. Bursting the proverbial bubble is no small task. Directly taking on the ever-growing isolation would be bold and arguably naive, so we start smaller and try and talk to people— seemingly simple. The event "_____, Collectively Narrated" aims to facilitate random interactions again by offering a community and space-focused event. It allows passersby to partake in the building of objects. We are not building the object to complete public space; we want to involve people and hear what they say. Talking to people and recording their stories and thoughts on a space gives a representative core sample of the area. Their stories are then displayed on the respective objects, allowing people to understand the objects and gain a deeper understanding of space and the people that inhabit it.',
				credit:
					'Together with Miriam Daxl, Shannon McLachlan and Stephan Sinn @ Design Investigations, die Angewandte, Vienna, Austria 2022',
				images: [
					'image/contentImage/cn1.jpg',
					'image/contentImage/cn2.jpg',
					'image/contentImage/cn4.png',
					'image/contentImage/cn5.jpg'
				],
				custom: false,
				component: Cn
			}
		},
		{
			id: 4,
			name: 'KI_tchen',
			image: 'image/kitchen.jpg',
			tag: '2021, Installation',
			color: '#756F6A',
			model: 'cow.obj',
			three: true,
			material: '#480703',
			zoom: [3.2, 3.2, 3.2],
			content: {
				text: "We imagine a today, where AI is embraced instead of shunned, where computers are entrusted with decisions and treated with the same respect we normally reserve for fellow humans.Illustrating the state of technology today, by actively working together with different types of AI and machine learning instead of imagining a hypothetical Super - Computer Brain. Creating both a real-world installation and a web-blog, enabling immersion in this other today.On the web, there is cooking blog, filled with only generated content. From recipes to a hypothetical city including tips for going out, and grocery shopping - if you were to stumble upon it randomly, would you be able to tell that a human did not take part? Further we opened a bar during 'From Bodies to Worlds', the Design Investigations exhibition at 2021 Angewandte Festival, where visitors could try Cookies and Cocktails with recipes generated by our own Algorithms.",
				credit:
					'Together with Mia Tesic and Eszter Zwickl @ Design Investigations, die Angewandte, Vienna, Austria 2021',
				images: [
					'image/contentImage/ki1.jpg',
					'image/contentImage/ki2.jpg',
					'image/contentImage/ki3.jpg',
					'image/contentImage/ki4.jpg',
					'image/contentImage/ki5.jpg'
				],
				custom: false,
				component: Kitchen
			}
		},
		{
			id: 5,
			name: 'McBoaty',
			image: 'image/boaty.jpg',
			tag: '2022, Creative Coding',
			color: '#667689',
			three: false,
			model: 'sun.obj',
			material: '#F3AA3A',
			zoom: [0.01, 0.01, 0.01],
			content: {
				text: 'Meant as a digitial window, a browser based animation changing with your local time and weather data. A simple exloration into animating using javascript as well as working with various APIs, in this Case OpenWeather, Location and Time',
				credit: 'Built in Summer 2022 using Svelte and Anime.js',
				images: ['image/contentImage/boaty2.jpg', 'image/contentImage/boaty3.jpg'],
				custom: false,
				component: Boaty
			}
		},
		{
			id: 2,
			name: 'Am I Gaboniontum?',
			image: 'image/amI.jpg',
			tag: '2022, Installation',
			color: '#3C3288',
			three: true,
			model: 'gaboni.obj',
			material: '#B66DC6',
			zoom: [0.08, 0.08, 0.08],
			content: {
				text: "Am I Gaboniuntum? is a conversation between an Artificial Gaboniontum and a human. An AI-developed conversation that comes with potential suggestions on what life for the Gabonionta could have been like. Questioning whether we can rid ourselves of modern preconceptions and gain an understanding for Proterozoic Life? Am I Gaboniuntum? invites the visitor to have a conversation with early life. Using a joystick and simple questions, a conversation is initiated, where the visitor chooses the theme of the conversation, and in this way gain insight into Gabonionta's life. We want the viewer to leave with curiosity and spark their creativity when it comes to thinking about early life. Am I Gaboniuntum? desires to make the Gabonionta come alive for the visitor, with the descriptive conversation and supported by AI-generated visuals. ",
				credit:
					'Together with Sophie Hausmann, Emilie Dyrlow Madsen and Florian Sapp @ Design Investigations, die Angewandte, Vienna, Austria 2022, in Collaboration with the Natural History Museum Vienna',
				images: [
					'image/contentImage/gaboni1.jpg',
					'image/contentImage/gaboni2.jpg',
					'image/contentImage/gaboni3.jpg',
					'image/contentImage/gaboni4.jpg'
				],
				custom: false
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
			<div class="entry current">
				<Entry title={selected.name} content={selected.content} custom{selected.content.custom} />
			</div>
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
</div>

<svelte:window on:keydown={handleKeydown} on:mousewheel={handleScroll} />

<style>
	.entry {
		width: 100%;
		height: 90%;
		background-color: #fefeef;
		box-shadow: #ffffff 1px 1px 20px -2px;
	}
	div {
		display: grid;
		grid-template-columns: 10vw 80vw 10vw;
		grid-template-rows: 88vh;
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
