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
    p {
        width: 10rem;
        margin: 0 25.5%;
    }
    progress {
        display: block;
        height: 2rem;
        border-radius: 7px; 
        width: 50%;
        margin: 2rem 25%;
    }
    progress::-webkit-progress-bar {
        background-color: rgba(255, 255, 255, var(--opacity));
        border-radius: 20px;
    }
    progress::-webkit-progress-value {
        background-color: var(--color-text4);
        border-radius: 20px;
    }
</style>