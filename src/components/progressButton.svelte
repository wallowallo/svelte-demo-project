<script lang="ts">
    export let percent: string = "";
    export let partyMode: boolean = false; 
</script>

<button on:click class:partyStyling={partyMode}>{percent}</button>

<style>
    button {
        margin-left: 2rem;
        margin-bottom: 2rem;
        width: 6rem;
    }
</style>