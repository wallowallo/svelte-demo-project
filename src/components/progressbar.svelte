<script lang="ts">
    export let value: number = 0;
    let text = "";
    
    switch(value) {
        case 0:
            text = "Monday";
            break;
        case 0.25:
            text = "Tuesday";
            break;
        case 0.5:
            text = "Wednesday";
            break;
        case 0.75:
            text = "Thursday";
            break;
        case 1:
            text = "WEEKEND!!!";
            break;
        default: 
            text = "";
    }
</script>

<p>{text}</p>

<progress {value} />

<style>
    progress {
        width: 100%;
        height: 2rem;
    }
</style>