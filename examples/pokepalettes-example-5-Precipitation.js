/*
===============
EE-POKEPALETTES
===============

----------------------------------------
Example 5: Kingdra styled Precipitation!
----------------------------------------

=================
GitHub Repository
=================

pokepalettes module: https://github.com/davemlz/ee-pokepalettes
*/

// REQUIRE THE EE-POKEPALETTES MODULE
var poke = require("users/dmlmont/pokepalettes:pokepalettes");

// LET'S USE THE GPM PRECIPITATION
var precipitation = ee.ImageCollection('NASA/GPM_L3/IMERG_MONTHLY_V06')
    .filterDate('2019-01-01', '2020-01-01')
    .select("precipitation")
    .max();

// MASK LOW VALUES
var mask = precipitation.gt(0.25);
var precipitation = precipitation.updateMask(mask);

// VISUALIZATION PARAMETERS
var vis = {
  min: 0.0,
  max: 1.5,
  // KINGDRA!!!!!!
  palette: poke.palettes.kingdra.reverse()
};

// ADD THE KINGDRA STYLED LST TO THE MAP!
Map.addLayer(precipitation, vis, 'Precipitation');

// ADD COLORBAR
print(poke.colorbar("Max Pr. (mm/hr) [Kingdra Palette]",vis.min,vis.max,vis.palette));
