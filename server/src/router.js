const express = require('express')
const router = express.Router()

const pokemonController = require('./controllers/pokemon-controller')

router.get('/pokemons', pokemonController.listar)

module.exports = router;