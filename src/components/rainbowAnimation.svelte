<script>
	import DiagonalRow from './diagonalRow.svelte';
</script>

<div class="💪">
	<DiagonalRow --color="red" --start="105%" --stop="0%" />
	<DiagonalRow --color="orange" --start="105%" --stop="0%" />
	<DiagonalRow --color="yellow" --start="105%" --stop="0%" />
	<DiagonalRow --color="green" --start="105%" --stop="0%" />
	<DiagonalRow --color="blue" --start="105%" --stop="0%" />
	<DiagonalRow --color="indigo" --start="105%" --stop="0%" />
	<DiagonalRow --color="violet" --start="105%" --stop="0%" />
</div>

<div class="💪 overlay">
	<DiagonalRow --color="violet" --start="0%" --stop="105%" --degree="45deg" />
	<DiagonalRow --color="indigo" --start="0%" --stop="105%" --degree="45deg" />
	<DiagonalRow --color="blue" --start="0%" --stop="105%" --degree="45deg" />
	<DiagonalRow --color="green" --start="0%" --stop="105%" --degree="45deg" />
	<DiagonalRow --color="yellow" --start="0%" --stop="105%" --degree="45deg" />
	<DiagonalRow --color="orange" --start="0%" --stop="105%" --degree="45deg" />
	<DiagonalRow --color="red" --start="0%" --stop="105%" --degree="45deg" />
</div>

<style>
	.💪 {
		display: flex;
		width: 14rem;
		height: 30rem;
		margin: 2.5rem auto 5rem auto;
	}

	.overlay {
		position: absolute;
		top: 4rem;
		left: calc(50vw - 7.6rem);
	}
</style>
