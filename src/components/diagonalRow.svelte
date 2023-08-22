<div class="diagonalRow"></div>

<style>
    .diagonalRow {
        width: 3rem;
        height: 30rem;
        border: 1px white solid;
        background: linear-gradient(var(--degree, -45deg), var(--color), var(--color), var(--color), var(--color2, white), var(--color3, white),var(--color),var(--color), var(--color));
        transform: skew(var(--degree, -45deg));
        animation: gradient 4s cubic-bezier(1,1,0,0) infinite;
        background-size: 2000% 100%;
    }

    @keyframes gradient {
        0% {
            background-position: var(--start) 0%;
        }
        100% {
            background-position: var(--stop) 0%;
        }
    }
</style>

