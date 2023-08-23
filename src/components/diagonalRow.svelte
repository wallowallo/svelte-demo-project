<div class="diagonalRow"></div>

<style>
    .diagonalRow {
        width: 2rem;
        height: 30rem;
        margin-right: -1px;
        border: 1px white solid;
        background: linear-gradient(var(--degree, -45deg), var(--color), var(--color), var(--color), var(--color2, white), var(--color3, white),var(--color),var(--color), var(--color));
        transform: skew(var(--degree, -45deg));
        animation: gradient 5s cubic-bezier(1,1,0,0) 10, zoom 5s 10;
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

    @keyframes zoom {
        0% {
            transform: skew(var(--degree, -45deg)) scale(1.02);
        }
        50% {
            transform: skew(var(--degree, -45deg)) scale(1);
        }
        100% {
            transform: skew(var(--degree, -45deg)) scale(1.02);
        }
    }
</style>

