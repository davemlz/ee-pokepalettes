# ee-pokepalettes
**Pokemon Color Palettes for the Google Earth Engine JavaScript API (Code Editor)**

## Overview

[Google Earth Engine](https://earthengine.google.com/) (GEE) is a cloud-based service for geospatial processing of vector and raster data. The Earth Engine platform has a [JavaScript and a Python API](https://developers.google.com/earth-engine/guides) with different methods to process geospatial objects. Google Earth Engine also provides a [HUGE PETABYTE-SCALE CATALOG](https://developers.google.com/earth-engine/datasets/) of raster and vector data that users can process online. The ee-pokepalettes is a just-for-fun module that allows you to use [Pokemon Color Palettes](https://pokepalettes.com/) to plot your data in GEE!

Check the usage of ee-pokepalettes here:

```javascript
var poke = require("users/dmlmont/pokepalettes:pokepalettes");

var ndvi = ee.ImageCollection('MODIS/006/MOD13A2')
  .filter(ee.Filter.date('2018-01-01', '2019-01-01'))
  .median()
  .divide(10000)
  .select("NDVI");

var vis = {
  min: 0.0,
  max: 1.0,
  // METAPOD!!!!!!
  palette: poke.palettes.metapod,
};

Map.addLayer(ndvi, vis, 'NDVI');
```

## How does it work?

The ee-pokepalettes module can be accepted [HERE](https://code.earthengine.google.com/?accept_repo=users/dmlmont/pokepalettes). Once accepted, it can be required by running the following line in the GEE JavaScript Code Editor:

```javascript
var poke = require("users/dmlmont/pokepalettes:pokepalettes");
```

The complete list of pokemon color palettes can be accessed by using the palettes attribute:

```javascript
print(poke.palettes)
```

A palette can be accessed using dot notation:

```javascript
print(poke.palettes.pikachu)
```

Or by using a key:

```javascript
print(poke.palettes["mr. mime"])
```

## Poke-examples!

### Geodude DEM!

![geodude](images/geodude.png)

### Charizard LST!

![charizard](images/charizard.png)

### Metapod NDVI!

![metapod](images/metapod.png)

### Kingdra Precipitation!

![kingdra](images/kingdra.png)

## License

The project is licensed under the MIT license.