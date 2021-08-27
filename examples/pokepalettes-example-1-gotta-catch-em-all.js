/*
===============
EE-POKEPALETTES
===============

-------------------------------------
Example 1: Gotta catch 'em all!!!!!!!
-------------------------------------

=================
GitHub Repository
=================

pokepalettes module: https://github.com/davemlz/ee-pokepalettes
*/

// REQUIRE THE EE-POKEPALETTES MODULE
var poke = require("users/dmlmont/pokepalettes:pokepalettes");

// ACCESS THE COMPLETE LIST OF POKEMON COLOR PALETTES
print("POKEMON COLOR PALETTES", poke.palettes);

// ACCESS THE PALETTE OF A SINGLE POKEMON
print("PIKACHU COLOR PALETTE", poke.palettes.pikachu);

// ACCESS THE PALETTE OF A SINGLE POKEMON USING A KEY
print("MR. MIME COLOR PALETTE", poke.palettes["mr. mime"]);

// CREATE A COLORBAR
print("CREATING A COLORBAR",
  poke.colorbar("My Title [Squirtle Palette]",0,120,poke.palettes.squirtle));