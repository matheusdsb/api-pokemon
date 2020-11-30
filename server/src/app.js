const express = require('express')
const bodyParser = require('body-parser')
const sequelize = require('./sequelize')
const apiPokemon = require('./apis/pokemon.api')

const app = express()

app.use(bodyParser.json())

apiPokemon(app, sequelize)

module.exports = app