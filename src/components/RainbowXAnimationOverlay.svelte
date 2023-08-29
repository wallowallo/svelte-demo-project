<script lang="ts">
	import DiagonalRow from './DiagonalRow.svelte';
	let hidden: boolean = false;

	setTimeout(() => (hidden = true), 3000);
</script>

<div class="overlay {hidden ? 'hidden' : ''}">
	<div class="container">
		<div class="💪 left">
			<DiagonalRow --color="var(--red)" --start="105%" --stop="0%" />
			<DiagonalRow --color="var(--orange)" --start="105%" --stop="0%" />
			<DiagonalRow --color="var(--yellow)" --start="105%" --stop="0%" />
			<DiagonalRow --color="var(--green)" --start="105%" --stop="0%" />
			<DiagonalRow --color="var(--blue)" --start="105%" --stop="0%" />
			<DiagonalRow --color="var(--purple)" --start="105%" --stop="0%" />
			<DiagonalRow --color="var(--pink)" --start="105%" --stop="0%" />
		</div>

		<div class="💪 right">
			<DiagonalRow --color="var(--pink)" --start="0%" --stop="105%" --degree="45deg" />
			<DiagonalRow --color="var(--purple)" --start="0%" --stop="105%" --degree="45deg" />
			<DiagonalRow --color="var(--blue)" --start="0%" --stop="105%" --degree="45deg" />
			<DiagonalRow --color="var(--green)" --start="0%" --stop="105%" --degree="45deg" />
			<DiagonalRow --color="var(--yellow)" --start="0%" --stop="105%" --degree="45deg" />
			<DiagonalRow --color="var(--orange)" --start="0%" --stop="105%" --degree="45deg" />
			<DiagonalRow --color="var(--red)" --start="0%" --stop="105%" --degree="45deg" />
		</div>
	</div>
</div>

<style lang="postcss">
	.overlay {
		position: fixed;
		width: 100%;
		height: 100%;
		display: inline-flex;
		background-image: linear-gradient(
			0deg,
			var(--color-bg-0),
			var(--color-bg-0),
			var(--color-bg-1)
		);
		z-index: 2;
	}

	.container {
		width: 40vw;
		height: 40vh;
		margin: 30vh 30vw;
	}
	.💪 {
		display: inline-flex;
		left: 7.6rem;
		width: 14rem;
		height: 30rem;
		margin: 2.5rem auto 5rem auto;
	}

	.left {
		position: absolute;
		right: 7.6rem;
	}
	.right {
		position: absolute;
		right: 7.6rem;
	}

	.hidden {
		display: none;
	}
</style>
