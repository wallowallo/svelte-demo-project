<script lang="ts">
    export let src: string = "";
    const alt: string = "Cute and quirky cats";

    let loading: boolean = true;

    setTimeout(() => loading = false, 3000);
</script>

{#if loading}
    <div class="catCardContainer loading">

        <div class="imageContainer loading">
        </div>
        
        <div class="descriptionContainer loading">
            <p class="loading"></p>
        </div>
    </div>
{:else}
    <div class="catCardContainer">

        <div class="imageContainer">
            <img class="cats" src={src} alt={alt}>
        </div>
        
        <div class="descriptionContainer">
            <p>Hello, you cutie cats!</p>
        </div>
    </div>
{/if}

<style>
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

    div.descriptionContainer, div.descriptionContainer.loading {
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
        animation: gradient 1s cubic-bezier(1,1,0,0) 10;
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