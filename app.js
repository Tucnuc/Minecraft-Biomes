document.getElementById('biomeSelector').addEventListener('change', function () {
    var selectedBiome = this.value;
    var backgroundImageUrl;

    switch (selectedBiome) {
        case 'jade-cliffs':
            backgroundImageUrl = "url('biomes/jade-cliffs.png')";
            break;
        case 'frozen-river':
            backgroundImageUrl = "url('biomes/frozen-river.png')";
            break;
        case 'lavender-fields':
            backgroundImageUrl = "url('biomes/lavender-fields.png')";
            break
        case 'overgrown-cliffs':
            backgroundImageUrl = "url('biomes/overgrown-cliffs.png')";
            break
        case 'coniferous-forest':
            backgroundImageUrl = "url('biomes/coniferous-forest.png')";
            break
        default:
            break;
    }

    document.body.style.backgroundImage = backgroundImageUrl;
    });



function changeColor() {
    var select = document.getElementById("biomeSelector");
    var selectedBiome = select.options[select.selectedIndex].value;

    select.className = "";

    select.classList.add(selectedBiome);
}