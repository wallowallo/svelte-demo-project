<script context="module" lang="ts">
	import type { TextareaObj } from '../models/models';
	let array: TextareaObj[] = [];
</script>

<script lang="ts">
	import { debounce } from '../routes/utils/utils.svelte';
	export let textAreaObjs = array;
	export let partyMode: boolean = false;
	export let value: string = '';
	export let idx: number = 0;

	const textareaObject: TextareaObj = { idx, text: '' };
	let typedIn: boolean = false;

	$: typedInArea = typedIn;
	$: myValue = value;
	$: updateTextInArray(myValue);

	const initializeArray = () => {
		array = [...array, textareaObject];
	};

	initializeArray();

	const setIndex = (idx: number) => (val: string) => {
		array[idx].text = val;
		textAreaObjs = [...array];
	};

	const updateTextInArray = setIndex(idx);

	const setFalse = () => (typedIn = false);
	const setTrue = () => (typedIn = true);

	const handleKeyUp = () => {
		setFalse();
		checkForParty();
	};

	const checkForParty = () => {
		if (myValue === 'party') {
			partyMode = true;
		} else {
			partyMode = false;
		}
	};
</script>

<div class="container">
	{#if typedInArea === true}
		<p>❤️‍🔥 Hell yeah!! They are typing in me! ❤️‍🔥</p>
	{/if}

	<textarea
		on:keydown={setTrue}
		on:keyup={debounce(handleKeyUp)}
		class:partyStyling={partyMode}
		bind:value={myValue}
		cols="30"
		rows="10"
	/>
</div>

<style>
	.container {
		height: 16rem;
	}
	p {
		width: 22rem;
		height: 2rem;
		margin: 0 auto;
	}

	textarea {
		padding: 1rem;
		width: 50%;
		height: 13rem;
		resize: none;
		margin: 0 25%;
		background-color: rgba(255, 255, 255, var(--opacity));
		font-size: 18px;
	}
</style>
