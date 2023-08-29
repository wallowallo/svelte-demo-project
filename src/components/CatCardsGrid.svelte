<script lang="ts">
	import { fade } from 'svelte/transition';
	import Card, { Content, Media, Actions, ActionIcons } from '@smui/card';
	import IconButton, { Icon } from '@smui/icon-button';
	import type { CatImageObject, StoreCatImages } from '../models/models';
	export let store: StoreCatImages;

	let loadingList: CatImageObject[] = Array(10);
	let loading: boolean = true;

	setTimeout(() => {
		loading = false;
	}, 5000);
</script>

<div class="grid">
	{#if loading}
		{#each loadingList as image}
			<div class="card-display">
				<div class="card-container loading">
					<Card class="transparent">
						<Media class="transparent" aspectRatio="16x9" />
						<Content class="mdc-typography--body2 content">Loading...</Content>
						<Actions>
							<ActionIcons>
								<IconButton toggle aria-label="Add to favorites" title="Add to favorites">
									<Icon class="material-icons" on>favorite</Icon>
									<Icon class="material-icons">favorite_border</Icon>
								</IconButton>
								<IconButton class="material-icons" title="Delete">delete</IconButton>
							</ActionIcons>
						</Actions>
					</Card>
				</div>
			</div>
		{/each}
	{:else}
		{#each $store as image (image.id)}
			<div class="card-display" out:fade>
				<div class="card-container">
					<Card class="smoothHover">
						<Media
							class="greyscale"
							style="background-image: url({image.src});"
							aspectRatio="16x9"
						/>
						<Content class="mdc-typography--body2 content">Hey, you cutie cats!</Content>
						<Actions>
							<ActionIcons>
								<IconButton
									on:click={() => store.like(image)}
									toggle={true}
									aria-label="Add to favorites"
									title="Add to favorites"
								>
									<Icon class="material-icons" on>favorite</Icon>
									<Icon class="material-icons">favorite_border</Icon>
								</IconButton>
								<IconButton
									class="material-icons"
									on:click={store.remove(image)}
									title="Remove"
									aria-label="Remove">delete</IconButton
								>
							</ActionIcons>
						</Actions>
					</Card>
				</div>
			</div>
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

	div.card-container.loading {
		background: linear-gradient(-45deg, black 5%, transparent, black);
		animation: gradient 1s cubic-bezier(1, 1, 0, 0) 10;
		background-size: 1000% 400%;
	}

	@keyframes gradient {
		0% {
			background-position: 105% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}
</style>
