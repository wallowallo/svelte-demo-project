<script lang="ts">
	import type { CatImageObject, StoreCatImages } from '../models/models';
	import LoadingCard from './LoadingCard.svelte';
	import CatCard from './CatCard.svelte';
	export let store: StoreCatImages;
	export let loading: boolean = true;

	let loadingList: CatImageObject[] = Array(10);
</script>

<div class="grid">
	{#if loading}
		{#each loadingList as image}
			<LoadingCard />
		{/each}
	{:else}
		{#each $store as image (image.id)}
			<CatCard {store} {image} />
		{/each}
	{/if}
</div>

<style lang="postcss">
	.grid {
		display: grid;
		gap: 2rem;
		width: 80vw;
		grid-template-columns: repeat(auto-fill, minmax(32rem, 1fr));
		margin: 5rem 10vw;
	}
</style>
