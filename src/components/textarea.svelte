<script lang="ts">
	import { debounce } from "../routes/utils/utils.svelte";
	export let partyMode: boolean = false;
    export let value: string = "";
	let typedIn: boolean = false;

	$: typedInArea = typedIn;
	$: myValue = value;

	const setFalse = () => typedIn = false;
	const setTrue = () => typedIn = true;

	const handleKeyUp = () => {
		setFalse();
		checkForParty();
	}

	const checkForParty = () => {
		if (myValue === "party") {
			partyMode = true;
		} else {
			partyMode = false;
		}
	}
</script>

{#if typedInArea === true}
	<p>❤️‍🔥 Hell yeah!! They are typing in me! ❤️‍🔥</p>
{/if}

<textarea on:keydown={setTrue} on:keyup={debounce(handleKeyUp)} class:partyStyling={partyMode} bind:value={myValue} cols="30" rows="10"></textarea>


<style>
    textarea {
		width: 100%;
		height: 100%;
		resize: none;
	}
</style>