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

	const addCatCard = () => missingElements();

	const removeCard = (src: string) => (filteredList = filteredList.filter((cat) => cat !== src));
</script>

<div class="grid">
	{#if loading}
		{#each [...filteredList] as src}
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
		{#each [...filteredList] as src}
			<div class="card-display">
				<div class="card-container">
					<Card class="smoothHover">
						<Media class="greyscale" style="background-image: url({src});" aspectRatio="16x9" />
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
	:global(.transparent) {
		background-color: transparent;
	}

	:global(.smoothHover) {
		z-index: 1;
		transition: all 0.3s ease-in-out;
	}

/* Pre-render the bigger shadow, but hide it */
	:global(.smoothHover::after) {
		box-shadow: 0 5px 15px rgba(0,0,0,0.3);
		opacity: 0;
		z-index: 2;
		transition: opacity 0.3s ease-in-out;
	}

	/* Transition to showing the bigger shadow on hover */
	:global(.smoothHover:hover::after) {
		opacity: 1;
	}

	:global(.smoothHover:hover) {
		z-index: 2;
		transform: scale(1.3);
	}

	:global(.greyscale) {
		-moz-filter: url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\'><filter id=\'grayscale\'><feColorMatrix type=\'matrix\' values=\'0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0\'/></filter></svg>#grayscale");
         -o-filter: url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\'><filter id=\'grayscale\'><feColorMatrix type=\'matrix\' values=\'0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0\'/></filter></svg>#grayscale");
         -webkit-filter: grayscale(100%);
         filter: gray;
         filter: url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\'><filter id=\'grayscale\'><feColorMatrix type=\'matrix\' values=\'0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0\'/></filter></svg>#grayscale");
	}

	:global(.greyscale:hover) {
		-moz-filter: none;
		-o-filter: none;
		-webkit-filter: none;
		filter: none;
	}

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
