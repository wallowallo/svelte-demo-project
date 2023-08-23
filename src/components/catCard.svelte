<script lang="ts">
    export let src: string = "";
    const alt: string = "Cute and quirky cats";
</script>

<div class="catCardContainer">
    <div class="imageContainer">
        <img class="cats" src={src} alt={alt}>
    </div>
    
    <div class="descriptionContainer">
        <p>Hello, you cutie cats!</p>
    </div>
</div>

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

    div.descriptionContainer {
        border-top: 1px solid var(--color-text4);
        width: 100%;
        padding: 2rem;
        height: 6rem;
        margin: 0;
    }

    div.catCardContainer {
        background-color: rgba(255, 255, 255, var(--opacity));
        display: inline-grid;
        width: 30rem;
        border: 1px solid var(--color-text);
        border-radius: 10px;
        box-shadow: -5px -5px 40px var(--color-text3);
    }
</style>