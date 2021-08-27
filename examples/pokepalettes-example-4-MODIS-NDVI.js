/*
===============
EE-POKEPALETTES
===============

-------------------------------
Example 4: Metapod styled NDVI!
-------------------------------

=================
GitHub Repository
=================

pokepalettes module: https://github.com/davemlz/ee-pokepalettes
*/

// REQUIRE THE EE-POKEPALETTES MODULE
var poke = require("users/dmlmont/pokepalettes:pokepalettes");

// LET'S USE THE NDVI FROM MODIS TERRA
var ndvi = ee.ImageCollection('MODIS/006/MOD13A2')
  .filter(ee.Filter.date('2018-01-01', '2019-01-01'))
  .median()
  .divide(10000)
  .select("NDVI");

// VISUALIZATION PARAMETERS
var vis = {
  min: 0.0,
  max: 1.0,
  // METAPOD!!!!!!
  palette: poke.palettes.metapod,
};

// ADD THE METAPOD STYLED NDVI TO THE MAP!
Map.addLayer(ndvi, vis, 'NDVI');

// ADD COLORBAR
print(poke.colorbar("NDVI [Metapod Palette]",vis.min,vis.max,vis.palette));
