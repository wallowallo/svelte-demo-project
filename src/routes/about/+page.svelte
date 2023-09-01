<script lang="ts">
	import { getContext } from 'svelte';
	import { typewriter } from '../utils/utils';
	export let recieveUpdateFromParent: number = 0;
	export let partyMode = false;
	let text = 'guess im the middle man';

	const clicked = getContext('clicked');

	$: clickedActive = clicked;
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="text-column">
	<h1 class:partyText={partyMode}>About this app</h1>

	{#if $$slots.top}
		<div class="header">
			<slot name="top" {text} />
		</div>
	{/if}

	<p class:partyText={partyMode}>
		This is a <a href="https://kit.svelte.dev">SvelteKit</a> app. You can make your own by typing the
		following into your command line and following the prompts:
	</p>

	<pre in:typewriter={{ speed: 10 }} class:partyText={partyMode}>npm create svelte@latest</pre>
	<slot {text} />

	<p class:partyText={partyMode}>
		The page you're looking at is purely static HTML, with no client-side interactivity needed.
		Because of that, we don't need to load any JavaScript. Try viewing the page's source, or opening
		the devtools network panel and reloading.
	</p>

	<p class:partyText={partyMode}>This has been sent from parent: {recieveUpdateFromParent}</p>

	<p>Clicked from parent is: {clickedActive}</p>

	<slot name="bottom" />
</div>

<style lang="postcss">
	.header {
		border-bottom: 1px solid black;
	}
</style>
