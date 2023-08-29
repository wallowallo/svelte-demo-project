<script lang="ts">
	import ProgressButtonx from './ProgressButton.svelte';
	import Progressbarx from './Progressbar.svelte';
	import { partyMode, progress } from '../routes/stores';

	$: $progress, partyProgress();
	let progressButtons: { percent: string; progress: number }[] = [
		{ percent: '0%', progress: 0 },
		{ percent: '25%', progress: 0.25 },
		{ percent: '50%', progress: 0.5 },
		{ percent: '75%', progress: 0.75 },
		{ percent: '100%', progress: 1 }
	];

	const partyProgress = () => {
		if ($progress === 1) partyMode.set(true);
		else partyMode.set(false);
	};
</script>

{#key $progress}
	<Progressbarx value={$progress} />
{/key}

<div class="progressButtonContainer">
	{#each progressButtons as button}
		<ProgressButtonx
			partyMode={$partyMode}
			on:click={(e) => progress.set(button.progress)}
			percent={button.percent}
		/>
	{/each}
</div>

<style lang="postcss">
	div.progressButtonContainer {
		display: flex;
		width: 50%;
		margin: 0 25%;
	}
</style>
