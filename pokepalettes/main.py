import colorsys
import pokepalette
import json

from PIL import ImageColor

def HSV(hex):
    r, g, b = ImageColor.getcolor(hex, "RGB")
    return colorsys.rgb_to_hsv(r, g, b)

pokepalettes = pokepalette.PokemonColours.__dict__

curated_pokepalettes = dict()

for pokemon, palette in pokepalettes.items():
    curated_pokemon = pokemon.replace("♀", " f.").replace("♂", " m.")
    curated_palette = [
        x.replace("untitled.txt", "") for x in palette
    ]
    curated_palette.sort(key = HSV)
    curated_pokepalettes[curated_pokemon] = curated_palette

with open("./data/pokepalettes.json", "w") as fp:
    json.dump(curated_pokepalettes, fp, indent=4, sort_keys=True)
