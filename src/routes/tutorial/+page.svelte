<script lang="ts">
    import { Confetti } from "svelte-confetti"
    import { partyMode, count, doubleIfParty, doubleIt, progress } from "../stores";
    import Textarea from "../../components/textarea.svelte";
    import PartyText from "../../components/partyText.svelte";
    import About from "../about/+page.svelte";
    import {
        setFalse,
        convertMillisecondsToDecimalSeconds,
        convertMillisecondsToSeconds,
        onCursorMove
    } from "../utils/utils.svelte";
	import Progressbar from "../../components/progressbar.svelte";
	import ProgressButton from "../../components/progressButton.svelte";
	import ToggleConfetti from "../../components/toggleConfetti.svelte";

    const src = "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExc2hqMHcwbGc1ZWo5cHo0Nml3MTk5bDc2aWM3OGtuMTZmaHNleHZxeiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Y4nmq4GOnLf4XIgALX/200_d.gif";
    const src2 = "https://i.dailymail.co.uk/i/pix/2017/06/06/01/41240EDA00000578-0-image-a-72_1496709824104.jpg"

    let textareaValue: string = "";
    let clicked: boolean = false;
    let timeouts: number[] = [];
    let intervals: number[] = [];
    let timeLeftMS: number = 0;
    let timeLeftSeconds: number = 0;
    let timeLeftDecimalSeconds: number = 0;
    let cursorCoordinates: {x: number, y: number} = { x: 0, y: 0}
    let name: string = "Kenny";
    let progressButtons: { percent: string, progress: number}[] = [
        { percent: "0%", progress: 0 },
        { percent: "25%", progress: 0.25 },
        { percent: "50%", progress: 0.50 },
        { percent: "75%", progress: 0.75 },
        { percent: "100%", progress: 1 }
    ];
    let greetList: string[] = ["Hello", "Hi", "Greetings", "Salut", "Hei", "Heisann", "Halloyen", "Hey"];
    let partyList: string[] = ["Woop woop!", "Let's gooooo!", "Time for the weekend!", "Let's enjoy the night!", "Party!", "Finally free!", "Let's dance!", "Disco!", "Yuuuuuup!"];
    
    $: $count, hideTextAfterTimeout();
    $: incrementedText = `You have incremented to: ${$count} (${$doubleIfParty}) and double is: ${$doubleIt} and decremented is: `
    $: cursorText = `${cursorCoordinates.x} - ${cursorCoordinates.y}`;
    $: partyButtonText = !$partyMode ? 'Party Time!' : 'Make it stop, please!'
    $: $progress, partyProgress();

    const partyProgress = () => {
        if($progress === 1)  partyMode.set(true);
    }

    const clickedText = `Clicked is: ${clicked}`;
    
    const incrementAndDisplayText = () => {
        count.increment();
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
        if ($count === 0) return;

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

    const togglePartyMode = () => {
        partyMode.set(!$partyMode);
        progress.set(0);
    };

    const getCoordinates = onCursorMove(cursorCoordinates);

    const myPromise = new Promise<string>((resolve, reject) => {
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
    {#if $partyMode} 
        <Confetti x={[-1, 6]} y={[1, 0.1]} delay={[0, 2000]} infinite duration=5000 amount=200 fallDistance="100vh"/>
    {/if}

    {#each ["Hello <strong>World</strong>!", incrementedText, clickedText] as text}
        <PartyText partyMode={$partyMode} text={text} />
    {/each} 
    
    <img class:partyMode={$partyMode} src={$partyMode ? src : src2} alt="bored man, clicking party button changes it to woop woop">
    
    <button class:partyStyling={$partyMode} on:click|trusted={incrementAndDisplayText}>
        { !clicked ? "Click me, please!" : "Thank you!"}
    </button>
    
    {#if clicked}
        <p class="greetOnClick" aria-hidden={clicked}>Top of the morning to ya!</p>
        <p>Time left before i disappear: {timeLeftSeconds}: {timeLeftDecimalSeconds} - Milliseconds: {timeLeftMS}</p>
    {:else}
        <PartyText partyMode={$partyMode} text="Don't trust the button over." />
    {/if}

    <ToggleConfetti>
        <button slot="label" class:partyStyling={$partyMode} on:click={togglePartyMode}>
            🥳 {partyButtonText} 🥳
        </button>

        {#if $partyMode} 
            <Confetti y={[0.75, 1.5]} x={[-1, 1]} colorArray={["#D2042D"]} amount=100 />
            <Confetti y={[1.05, 1.20]} x={[-1, 1]} colorArray={["#000000"]} amount=50 />
            <Confetti y={[0.75, 1.5]} x={[-0.5, -0.25]} colorArray={["#000000"]} amount=20 />
        {/if}
    </ToggleConfetti>

    <Progressbar value={$progress} />
    {#each progressButtons as button}
            <ProgressButton partyMode={$partyMode} on:click={(e) => progress.set(button.progress)} percent={button.percent} />
    {/each} 
    
    {#await myPromise}
        <PartyText partyMode={$partyMode} text="...waiting"/>
    {:then greeting}
        {#each !$partyMode ? [...greetList, greeting] : partyList as greet}
            <PartyText partyMode={$partyMode} text={greet} />
        {/each} 
    {/await}

    <input class:partyStyling={$partyMode} type="text" bind:value={name}>

    {#each [name, cursorText] as text}
        <PartyText partyMode={$partyMode} text={text} />
    {/each}
    
    <Textarea bind:value={textareaValue} bind:partyMode={$partyMode}/>

    {#if textareaValue !== ""}
        <PartyText partyMode={$partyMode} text={textareaValue} />
    {:else}
        <PartyText partyMode={$partyMode} text="Aaaah! To bask in the sunlight!" />
    {/if}

    <input class:partyStyling={$partyMode} type="text" bind:value={textareaValue}>

    <About partyMode={$partyMode} recieveUpdateFromParent={$count} />

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