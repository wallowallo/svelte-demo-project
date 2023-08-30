<script lang="ts">
    import Card, { Content, Media, Actions, ActionIcons } from '@smui/card';
	import IconButton, { Icon } from '@smui/icon-button';
</script>

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

<style>
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