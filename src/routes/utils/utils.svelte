<script context="module" lang="ts">
    const increment = (num: number): number => num += 1;
    const decrement = (num: number): number => num - 1;
    
    const setFalse = (truthyValue: boolean): boolean => {
        return truthyValue = false;
    }

    const double = (x: number) => x * 2;

    const convertMillisecondsToSeconds = (milliseconds: number): number => Math.floor((milliseconds % (1000 * 60)) / 1000);
    const convertMillisecondsToDecimalSeconds = (milliseconds: number): number => Math.floor((milliseconds % (1000 * 60)) / 10);

    const onCursorMove = (cursorCoordinates: {x: number, y: number}) => (event: PointerEvent): {x: number, y: number} => cursorCoordinates = { x: event.clientX, y: event.clientY }
    
    export {double, onCursorMove, increment, decrement, setFalse, convertMillisecondsToDecimalSeconds, convertMillisecondsToSeconds};
</script>