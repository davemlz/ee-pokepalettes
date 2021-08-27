/*
===============
EE-POKEPALETTES
===============

---------------------------------------------------
Example 2: SRTM DEM with multiple pokemon palettes!
---------------------------------------------------

=================
GitHub Repository
=================

pokepalettes module: https://github.com/davemlz/ee-pokepalettes
*/

// REQUIRE THE EE-POKEPALETTES MODULE
var poke = require("users/dmlmont/pokepalettes:pokepalettes");

// LET'S USE THE SRTM
var SRTM = ee.Image('CGIAR/SRTM90_V4');

// GET THE ELEVATION DATA
var elevation = SRTM.select('elevation');

// SET THE MIN AND MAX VALUE OF THE VISUALIZATION
var MIN = 0;
var MAX = 4000;

// TRY DIFFERENT POKEMON!
Map.addLayer(elevation,{min:MIN, max:MAX, palette: poke.palettes.charizard}, 'Charizard');
Map.addLayer(elevation,{min:MIN, max:MAX, palette: poke.palettes.pikachu}, 'Pikachu');
Map.addLayer(elevation,{min:MIN, max:MAX, palette: poke.palettes.geodude}, 'Geodude');
Map.addLayer(elevation,{min:MIN, max:MAX, palette: poke.palettes.squirtle}, 'Squirtle');
Map.addLayer(elevation,{min:MIN, max:MAX, palette: poke.palettes.jigglypuff}, 'Jigglypuff');
Map.addLayer(elevation,{min:MIN, max:MAX, palette: poke.palettes.zapdos}, 'Zapdos');
Map.addLayer(elevation,{min:MIN, max:MAX, palette: poke.palettes.bulbasaur}, 'Bulbasaur');