<script lanb="ts">
    import Card, { Media, MediaContent } from '@smui/card';
    let url = "https://img.freepik.com/vector-premium/fondo-degradado-colorido-abstracto-figuras-geometricas-color-diferentes-formas-linea-blanca_324137-2966.jpg"
    url = "https://static.vecteezy.com/system/resources/previews/000/680/843/original/gradient-purple-retro-geometric-shapes-background.jpg"
</script>

<div class="card-container flex w-[60%] mx-auto h-[42vh] my-[7rem]">
    <Card class="w-[100%] h-[100%] rounded-lg border-white border-2 overflow-hidden">
        <Media
            style="background-image: url({url});"
            aspectRatio="16x9"
            class="">
            <MediaContent>
                <h1>Hello and welcome</h1>
            </MediaContent>
        </Media>
    </Card>
</div>

