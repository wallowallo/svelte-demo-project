<!-- component not in use, keep for own purposes -->

<script lang="ts">
	import Fab, { Icon } from '@smui/fab';
	import IconButton from '@smui/icon-button';
	export let src: string = '';
	export let remove: boolean = true;
	export let removeFunction = () => {};
	export let addFunction = () => {};
	export let id: number = 0;
	const alt: string = 'Cute and quirky cats';

	let loading: boolean = true;

	setTimeout(() => (loading = false), 3000);
</script>

{#if src === 'add'}
	<div class="catCardContainer {id} {loading ? 'loading' : ''}">
		<div class="imageContainer">
			{#if !loading}
				<div class="fabContainer">
					<Fab color="primary" on:click={() => addFunction()}>
						<Icon class="material-icons">add</Icon>
					</Fab>
				</div>
			{/if}
		</div>

		<div class="descriptionContainer {loading ? 'loading' : ''}" />
	</div>
{:else}
	<div class="catCardContainer {id} {loading ? 'loading' : ''}">
		<div class="imageContainer">
			{#if !loading && src !== 'add'}
				<img class="cats" {src} {alt} />
			{/if}
		</div>

		<div class="descriptionContainer {loading ? 'loading' : ''}">
			{#if remove && !loading}
				<p>Hello, you cutie cats!</p>
				<IconButton class="material-icons" size="normal" on:click={removeFunction}
					>delete</IconButton
				>
			{/if}
		</div>
	</div>
{/if}

<style lang="postcss">
	.fabContainer {
		display: flex;
		width: 100%;
		height: 100%;
		justify-content: center;
		align-items: center;
	}
	p {
		width: 50%;
		display: inline;
		margin-right: 2rem;
	}
	img.cats {
		position: absolute;
		width: 30rem;
		max-width: 100%;
		height: auto;
		border-radius: 11px 11px 0 0;
	}

	div.imageContainer {
		display: block;
		position: relative;
		width: 100%;
		height: 16rem;
		overflow: hidden;
	}

	div.descriptionContainer,
	div.descriptionContainer.loading {
		background-color: var(--color-text4);
		border-top: 1px solid var(--color-text3);
		border-radius: 0 0 10px 10px;
		width: 100%;
		padding: 2rem;
		height: 6rem;
		margin: 0;
	}

	div.catCardContainer {
		display: inline-grid;
		width: 30rem;
		border: 1px solid var(--color-text);
		border-radius: 10px;
		box-shadow: -5px -5px 40px var(--color-text3);
	}

	div.loading {
		border-radius: 10px;
		background: linear-gradient(-45deg, white 5%, transparent, white);
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
