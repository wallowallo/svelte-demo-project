<script lang="ts">
    import { partyMode, count } from "../stores";
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

	const worldStringContainingHTML = '<strong>world</strong>';
    const src = "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExc2hqMHcwbGc1ZWo5cHo0Nml3MTk5bDc2aWM3OGtuMTZmaHNleHZxeiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Y4nmq4GOnLf4XIgALX/200_d.gif";
    const src2 = "https://i.dailymail.co.uk/i/pix/2017/06/06/01/41240EDA00000578-0-image-a-72_1496709824104.jpg"

    let textareaValue: string = "";
    let count_value: number = 0;
    let clicked: boolean = false;
    let timeouts: number[] = [];
    let intervals: number[] = [];
    let timeLeftMS: number = 0;
    let timeLeftSeconds: number = 0;
    let timeLeftDecimalSeconds: number = 0;
    let cursorCoordinates: {x: number, y: number} = { x: 0, y: 0}
    let name: string = "Kenny";
    let greetList: string[] = ["Hello", "Hi", "Greetings", "Salut", "Hei", "Heisann", "Halloyen", "Hey"];
    let partyList: string[] = ["Woop woop!", "Let's gooooo!", "Time for the weekend!", "Let's enjoy the night!", "Party!", "Finally free!", "Let's dance!", "Disco!", "Yuuuuuup!"];
    let partyMode_value = false;

    
    partyMode.subscribe((value: boolean): void => {
        partyMode_value = value;
    });

    count.subscribe((value: number): void => {
        count_value = value;
    });

    const incrementAndDisplayText = () => {
        count.update((n: number) => increment(n));
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
        if (count_value === 0) return;

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

    const togglePartyMode = () => partyMode.set(!partyMode_value);
    
    $: doubled = count_value * 2;
    $: dec = decrement(count_value);
    $: count_value, hideTextAfterTimeout();

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

    <p class:partyText={partyMode_value}>Hello {@html worldStringContainingHTML.toUpperCase()}!</p>
    <p class:partyText={partyMode_value}> You have incremented to: {count_value} and double is: {doubled} and decremented is: {dec}</p>
    <p class:partyText={partyMode_value}> Clicked is: {clicked}</p>
    
    <img class:partyMode={partyMode_value} src={partyMode_value ? src : src2} alt="fun time with an emoji, silly, tongue sticking out">
    
    <button class:partyStyling={partyMode_value} on:click|trusted={incrementAndDisplayText}>
        { !clicked ? "Click me, please!" : "Thank you!"}
    </button>
    
    {#if clicked}
        <p class="greetOnClick" aria-hidden={clicked}>Top of the morning to ya!</p>
        <p>Time left before i disappear: {timeLeftSeconds}: {timeLeftDecimalSeconds} - Milliseconds: {timeLeftMS}</p>
    {:else}
        <p class:partyText={partyMode_value}>Don't trust the button over.</p>
    {/if}

    <button class:partyStyling={partyMode_value} on:click={togglePartyMode}>
        {!partyMode_value ? 'Party Time!' : 'Make it stop, please!'}
    </button>
    
    {#await myPromise}
        <p class:partyText={partyMode_value}>
            ...waiting
        </p>
    {:then greeting}
        {#each !partyMode_value ? [...greetList, greeting] : partyList as greet}
            <p class:partyText={partyMode_value}>{greet}</p>
        {/each} 
    {/await}

    <input class:partyStyling={partyMode_value} type="text" bind:value={name}>

    <p class:partyText={partyMode_value}>{name}</p>

    <p class:partyText={partyMode_value}>{cursorCoordinates.x} - {cursorCoordinates.y}</p>
    
    <Textarea bind:value={textareaValue} bind:partyMode={partyMode_value}/>

    {#if textareaValue !== ""}
        <p class:partyText={partyMode_value}>{textareaValue}</p>
    {:else}
        <p class:partyText={partyMode_value}>Aaaah! To bask in the sunlight!</p>
    {/if}

    <input class:partyStyling={partyMode_value} type="text" bind:value={textareaValue}>

    <About bind:partyMode={partyMode_value} recieveUpdateFromParent={count_value} />
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

    :global(.partyText) {
        color: transparent;
        background: linear-gradient(45deg, #ffb700, #ff57a5, #353acd);
        background-size: 400% 400%;
        animation: gradient 2s ease infinite;
        background-clip: text;
        -webkit-background-clip: text;
    }

    :global(.partyStyling) {
        background: linear-gradient(45deg, #ffb700, #ff57a5, #353acd);
        background-size: 400% 400%;
        animation: gradient 2s ease infinite;
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