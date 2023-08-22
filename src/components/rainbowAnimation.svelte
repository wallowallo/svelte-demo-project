<script>
    import DiagonalRow from "./diagonalRow.svelte";
</script>

<div class="💪">
    <DiagonalRow --color="red" --start=100% --stop=0% />
    <DiagonalRow --color="orange" --start=100% --stop=0% />
    <DiagonalRow --color="yellow" --start=100% --stop=0% />
    <DiagonalRow --color="green" --start=100% --stop=0% />
    <DiagonalRow --color="blue" --start=100% --stop=0% />
    <DiagonalRow --color="indigo" --start=100% --stop=0% />
    <DiagonalRow --color="violet" --start=100% --stop=0% />
</div>

<div class="💪 overlay">
    <DiagonalRow --color="red" --start=0% --stop=100% --degree="45deg" />
    <DiagonalRow --color="orange" --start=0% --stop=100% --degree="45deg" />
    <DiagonalRow --color="yellow" --start=0% --stop=100% --degree="45deg" />
    <DiagonalRow --color="green" --start=0% --stop=100% --degree="45deg" />
    <DiagonalRow --color="blue" --start=0% --stop=100% --degree="45deg" />
    <DiagonalRow --color="indigo" --start=0% --stop=100% --degree="45deg" />
    <DiagonalRow --color="violet" --start=0% --stop=100% --degree="45deg" />
</div>

<style>
    .💪 {
        display: flex;
        width: 21rem;
        height: 30rem;
        margin: 0 auto;
    }

    .overlay {
        position: absolute;
        top: 4rem;
        left: calc(50vw - 11.2rem);
    }
</style>