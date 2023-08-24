<script lang="ts">
	export let partyMode = false;
	export let text = '';
</script>

<p class:partyText={partyMode}>{@html text}</p>

<style>
	p {
		color: var(--text-color, #ffffff);
		margin: 5px auto;
		width: 30rem;
		text-align: center;
	}

	:global(p.partyText, h1.partyText) {
		color: transparent;
		background: linear-gradient(45deg, #ffb700, #ff57a5, #353acd);
		background-size: 400% 400%;
		animation: gradient 2s ease infinite;
		background-clip: text;
		-webkit-background-clip: text;
	}

	@keyframes gradient {
		0% {
			background-position: 0% 50%;
		}
		25% {
			background-position: 50% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		75% {
			background-position: 50% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}
</style>
