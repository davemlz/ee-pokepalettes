/*
===============
EE-POKEPALETTES
===============

--------------------------------
Example 3: Charizard styled LST!
--------------------------------

=================
GitHub Repository
=================

pokepalettes module: https://github.com/davemlz/ee-pokepalettes
*/

// REQUIRE THE EE-POKEPALETTES MODULE
var poke = require("users/dmlmont/pokepalettes:pokepalettes");

// LET'S USE THE LST DAY FROM MODIS TERRA
var LST = ee.ImageCollection('MODIS/006/MOD11A1')
  .filter(ee.Filter.date('2018-04-01', '2018-09-01'))
  .mean()
  .select('LST_Day_1km')
  .multiply(0.02);

// VISUALIZATION PARAMETERS
var vis = {
  min: 260,
  max: 330,
  // CHARIZARD!!!!!!
  palette: poke.palettes.charizard.reverse(), // YOU CAN REVERSE THE PALETTE!
};

// ADD THE CHARIZARD STYLED LST TO THE MAP!
Map.addLayer(LST, vis, 'Land Surface Temperature');

// ADD COLORBAR
print(poke.colorbar("LST (K) [Charizard Palette]",vis.min,vis.max,vis.palette));