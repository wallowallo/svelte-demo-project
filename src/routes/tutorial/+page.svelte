<script lang="ts">
    import Textarea from "../textarea/textarea.svelte";
    import About from "../about/+page.svelte";
    import {
        increment,
        decrement,
        setFalse,
        convertMillisecondsToDecimalSeconds,
        convertMillisecondsToSeconds,
        onCursorMove
    } from "../utils/utils.svelte";

	const worldStringContainingHTML = '<strong>worl</strong>';
    const src = "https://www.shutterstock.com/shutterstock/photos/487329331/display_1500/stock-vector-fun-time-inscription-vector-illustration-487329331.jpg";
    
    let textareaValue: string = "";
    let count: number = 0;
    let clicked: boolean = false;
    let timeouts: number[] = [];
    let intervals: number[] = [];
    let timeLeftMS: number = 0;
    let timeLeftSeconds: number = 0;
    let timeLeftDecimalSeconds: number = 0;
    let cursorCoordinates: {x: number, y: number} = { x: 0, y: 0}
    let name: string = "Kenny";
    let greetList: string[] = ["Hello", "Hi", "Greetings", "Salut", "Hei", "Heisann", "Halloyen", "Hey"];
    let partyMode = false;

    const incrementAndDisplayText = () => {
        count = increment(count);
        clicked = true;
    }


    const timeRemaining = () => {
        const interval = setInterval(function() {
            timeLeftMS -= 10;
            timeLeftSeconds = convertMillisecondsToSeconds(timeLeftMS);
            timeLeftDecimalSeconds = convertMillisecondsToDecimalSeconds(timeLeftMS);

            if (timeLeftMS < 0) clearInterval(interval);
        }, 10);

        intervals = [
        ...intervals,
        interval
        ]

        if (clicked && intervals.length > 1) {
            intervals.slice(0, -1).forEach((num: number) => clearInterval(num));
            intervals = [interval]
        } 
    }

    const hideTextAfterTimeout = () => {
        if (count === 0) return;

        timeLeftMS = 2000;
        timeRemaining();
        const timeout = setTimeout(() => clicked = setFalse(clicked), 2000);
        timeouts = [
            ...timeouts,
            timeout
        ]

        if (clicked && timeouts.length > 1) {
            timeouts.slice(0, -1).forEach((num: number) => clearTimeout(num));
            timeouts = [timeout]
        }
    }

    const togglePartyMode = () => partyMode = !partyMode;

    $: doubled = count * 2;
    $: dec = decrement(count);
    $: count, hideTextAfterTimeout();

    const getCoordinates = onCursorMove(cursorCoordinates);

    const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("hello from over there");
    }, 1000);

});

</script>


<svelte:head>
	<title>Tutorial</title>
	<meta name="description" content="Tutorial" />
</svelte:head>

<div on:pointermove|trusted={(e) => cursorCoordinates = getCoordinates(e)}>

    <p class:partyText={partyMode}>Hello {@html worldStringContainingHTML.toUpperCase()}!</p>
    <p class:partyText={partyMode}> You have incremented to: {count} and double is: {doubled} and decremented is: {dec}</p>
    <p class:partyText={partyMode}> Clicked is: {clicked}</p>
    
    <img class:partyMode {src} alt="fun time with an emoji, silly, tongue sticking out">
    
    <button class:partyStyling={partyMode} on:click|trusted={incrementAndDisplayText}>
        Click me, please.
    </button>
    
    {#if clicked}
        <p class="greetOnClick" aria-hidden={clicked}>Top of the morning to ya!</p>
        <p>Time left before i disappear: {timeLeftSeconds}: {timeLeftDecimalSeconds} - Milliseconds: {timeLeftMS}</p>
    {:else}
        <p class:partyText={partyMode}>ok</p>
    {/if}
    
    {#await myPromise}
        <p class:partyText={partyMode}>
            ...waiting
        </p>
    {:then greeting}
        {#each [...greetList, greeting] as greet}
            <p class:partyText={partyMode}>{greet}</p>
        {/each} 
    {/await}

    <input class:partyStyling={partyMode} type="text" bind:value={name}>

    <p class:partyText={partyMode}>{name}</p>

    <p class:partyText={partyMode}>{cursorCoordinates.x} - {cursorCoordinates.y}</p>
    
    <Textarea bind:value={textareaValue} bind:partyMode/>

    {#if textareaValue !== ""}
        <p class:partyText={partyMode}>{textareaValue}</p>
    {:else}
        <p class:partyText={partyMode}>Aaaah! To bask in the sunlight!</p>
    {/if}

    <input class:partyStyling={partyMode} type="text" bind:value={textareaValue}>

    <button class:partyStyling={partyMode} on:click={togglePartyMode}>
        Party Time!
    </button>

    <About recieveUpdateFromParent={count} />
</div>



<style>
    div {
        display: block;
    }

    img {
        display: flex;
        margin: 0 auto;
        width: 50%;
        height: 50%;
    }

    img.partyMode {
        animation: party-zoom 1.5s ease infinite;
    }

    input {
        display: block;
        margin: 5px auto;
        margin-top: 15px;
        width: 10rem;
        height: 3rem;
    }

    p.greetOnClick {
        color: blueviolet;
    }

    p {
        margin: 5px auto;
        width: 30rem;
        text-align: center;
    }

    button {
        display: block;
        margin: 3rem auto;
        width: 20rem;
        height: 3rem;
    }

    .partyText {
        color: transparent;
        background: linear-gradient(45deg, #ffb700, #ff57a5, #353acd);
        background-size: 400% 400%;
        animation: gradient 3s ease infinite;
        background-clip: text;
        -webkit-background-clip: text;
    }

    :global(.partyStyling) {
        background: linear-gradient(45deg, #ffb700, #ff57a5, #353acd);
        background-size: 400% 400%;
        animation: gradient 3s ease infinite;
    }

    @keyframes gradient {
        0% {
            background-position: 0% 50%;
        }
        25% {
            background-position: 50% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        75% {
            background-position: 50% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }

    @keyframes party-zoom {
        0% {
            transform: scale(0.5, 0.5);
        }
        15% {
            transform: scale(0.5, 0.5);
        }
        25% {
            transform: scale(1.5, 1.5);
        }
        35% {
            transform: scale(1, 1);
        }
        50% {
            transform: scale(1.5, 1.5);
        }
        100% {
            transform: scale(0.5, 0.5);
        }
    }
</style>