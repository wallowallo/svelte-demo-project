<script context="module" lang="ts">
	import type { TextareaObj } from '../models/models';
	let array: TextareaObj[] = [];
</script>

<script lang="ts">
	import { debounce } from '../routes/utils/utils';
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

<div class="h-[16rem] mx-auto">
	{#if typedInArea === true}
		<p class="h-[2rem] w-[22rem] mx-auto">❤️‍🔥 Hell yeah!! They are typing in me! ❤️‍🔥</p>
	{/if}

	<textarea
		class="w-1/2 h-[13rem] mx-[25%] p-[1rem] resize-none text-xl opacity-[--opacity] text-black"
		name="svada"
		on:keydown={setTrue}
		on:keyup={debounce(handleKeyUp)}
		class:partyStyling={partyMode}
		bind:value={myValue}
		cols="30"
		rows="10"
	/>
</div>
