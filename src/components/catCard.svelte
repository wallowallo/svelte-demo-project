<script lang="ts">
    import Card, { Content, Media, Actions, ActionIcons } from '@smui/card';
	import IconButton, { Icon } from '@smui/icon-button';
    import { fade } from 'svelte/transition';
    import { inview } from 'svelte-inview'
	import type { Options } from 'svelte-inview';
	import type { CatImageObject, StoreCatImages } from '../models/models';
    export let store: StoreCatImages;
    export let image: CatImageObject;

    let isInView: boolean;
    const options: Options = {
		rootMargin: '100px',
		unobserveOnEnter: false,
  	};

    const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
		isInView = detail.inView;
  	};
</script>

<div class="card-display" out:fade use:inview={options} on:inview_change={handleChange}>
    {#if isInView}
        <div class="card-container" in:fade={{ delay: 200, duration: 1000}}>
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
                            <Icon class="material-icons hover:text-white" on>favorite</Icon>
                            <Icon class="material-icons hover:text-red-600">favorite_border</Icon>
                        </IconButton>
                        <IconButton
                            class="material-icons hover:text-[var(--color-text4)]"
                            on:click={() => store.remove(image)}
                            title="Remove"
                            aria-label="Remove">delete</IconButton
                        >
                    </ActionIcons>
                </Actions>
            </Card>
        </div>
    {:else}
        <div class="card-container transparent">
            <Card class="transparent">
                <Media class="transparent" aspectRatio="16x9" />
                <Content class="mdc-typography--body2 content"></Content>
                <Actions>
                    <ActionIcons>
                    </ActionIcons>
                </Actions>
            </Card>
        </div>
    {/if}
</div>