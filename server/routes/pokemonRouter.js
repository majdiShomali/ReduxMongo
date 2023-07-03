const express = require("express");
const router = express.Router();
const pokemonController = require("../controllers/pokemonController");
const protected =require("../middleware/Protected")

const upload = require("../middleware/handleImage")

router.get("/api/pokemons" , pokemonController.allPokemons);
router.post("/api/pokemons", pokemonController.newPokemon);

module.exports = router;