<script lang="ts">
    import Confetti from "svelte-confetti";
    interface XCoordinates { left: number, right: number };
    interface YCoordinates { bottom: number, top: number };
    // x
    export let redXValues: XCoordinates  = {left: 0, right: 0};

    export let whiteXValues: XCoordinates = {left: 0, right: 0};
    export let whiteXValues2: XCoordinates = {left: 0, right: 0};
    
    export let blueXValues: XCoordinates  = {left: 0, right: 0};
    export let blueXValues2: XCoordinates  = {left: 0, right: 0};

    // y
    export let redYValues: YCoordinates  = {bottom: 0, top: 0};
    
    export let whiteYValues: YCoordinates = {bottom: 0, top: 0};
    export let whiteYValues2: YCoordinates = {bottom: 0, top: 0};
    
    export let blueYValues: YCoordinates  = {bottom: 0, top: 0};
    export let blueYValues2: YCoordinates  = {bottom: 0, top: 0};
    
</script>

<!-- red -->
<Confetti y={[redYValues.bottom, redYValues.top]} x={[redXValues.left, 1]} colorArray={["#D2042D"]} amount={500} />
<!-- white -->
<Confetti y={[whiteYValues.bottom, whiteYValues.top]} x={[whiteXValues.left, whiteXValues.right]} colorArray={["#ffffff"]} amount={200} />
<Confetti y={[whiteYValues2.bottom, whiteYValues2.top]} x={[whiteXValues2.left, whiteXValues2.right]} colorArray={["#ffffff"]} amount={100} />
<!-- blue -->
<Confetti y={[blueYValues.bottom, blueYValues.top]} x={[blueXValues.left, blueXValues.right]} colorArray={["#00008B"]} amount={200} />
<Confetti y={[blueYValues2.bottom, blueYValues2.top]} x={[blueXValues2.left, blueXValues2.right]} colorArray={["#00008B"]} amount={100} />