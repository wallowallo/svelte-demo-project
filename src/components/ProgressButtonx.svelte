<script lang="ts">
	export let percent: string = '';
	export let partyMode: boolean = false;
</script>

<button on:click class:partyStyling={partyMode}>{percent}</button>

<style>
	button {
		display: inline;
		margin-left: 2rem;
		margin-bottom: 2rem;
		width: 5rem;
		height: 2rem;
		background-color: rgba(255, 255, 255, var(--opacity));
	}
</style>
