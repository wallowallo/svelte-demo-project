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
    
    const typewriter = (node: any, {speed = 1}) => {
        const valid = node.childNodes.length === 1 && node.childNodes[0].nodeType === Node.TEXT_NODE;

        if (!valid) {
            throw new Error(`This transition only works on elements with a single text node child`);
        }

        const text = node.textContent;
        const duration = text.length / (speed * 0.01);

        return {
            duration,
            tick: (t: any) => {
                const i = Math.trunc(text.length * t);
                node.textContent = text.slice(0, i);
            }
        };
    }
    
    export {typewriter, double, onCursorMove, increment, decrement, setFalse, convertMillisecondsToDecimalSeconds, convertMillisecondsToSeconds};
</script>