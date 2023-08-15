<script lang="ts">
    export let value = "";
    export let partyMode = false;
</script>


<textarea class:partyStyling={partyMode} bind:value cols="30" rows="10"></textarea>

<style>
    textarea {
		width: 100%;
		height: 100%;
		resize: none;
	}
</style>