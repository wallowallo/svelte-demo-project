<script lang="ts">
	import Card, { Content, Media, Actions, ActionIcons } from '@smui/card';
	import IconButton, { Icon } from '@smui/icon-button';
	export let remove: boolean = true;
	export let catList: string[] = [];
	let filteredList: string[] = Array(9);
	let loading: boolean = true;

	// add delete animation

	// add animation when adding card

	// want to add hover funtionality to lift card
	const liftOnHover = (e: any) => {
		console.log(e);
	};

	setTimeout(() => {
		filteredList = catList;
		loading = false;
	}, 5000);

	const missingElements = () => {
		console.log(catList, filteredList);
	};

	console.log(missingElements);
	const addCatCard = () => missingElements();

	const removeCard = (src: string) => (filteredList = filteredList.filter((cat) => cat !== src));
</script>

<div class="grid">
	{#if loading}
		{#each [...filteredList, 'add'] as src}
			<div class="card-display">
				<div class="card-container loading">
					<Card style="background-color: transparent;">
						<Media style="background-color: transparent;" aspectRatio="16x9" />
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
		{#each [...filteredList, 'add'] as src}
			<div class="card-display">
				<div class="card-container">
					<Card>
						<Media style="background-image: url({src})" aspectRatio="16x9" />
						<Content class="mdc-typography--body2 content">Hey, you cutie cats!</Content>
						<Actions>
							<ActionIcons>
								<IconButton on:click toggle aria-label="Add to favorites" title="Add to favorites">
									<Icon class="material-icons" on>favorite</Icon>
									<Icon class="material-icons">favorite_border</Icon>
								</IconButton>
								<IconButton class="material-icons" on:click={() => removeCard(src)} title="Delete"
									>delete</IconButton
								>
							</ActionIcons>
						</Actions>
					</Card>
				</div>
			</div>
		{/each}
	{/if}
</div>

<style>
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
