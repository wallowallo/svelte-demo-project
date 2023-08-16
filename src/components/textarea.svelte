<script lang="ts">
    export let value = "";
    export let partyMode = false;

	const checkForParty = () => {
		if (value && value.toLowerCase() === "party") {
			partyMode = true;
		} else {
			partyMode = false;
		}
	}
</script>


<textarea on:keyup={checkForParty} class:partyStyling={partyMode} bind:value cols="30" rows="10"></textarea>

<style>
    textarea {
		width: 100%;
		height: 100%;
		resize: none;
	}
</style>