const express = require('express')
const bodyParser = require('body-parser')
const sequelize = require('./sequelize')
const apiPokemon = require('./apis/pokemon.api')
const apiBatalha = require('./apis/batalha.api')
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('../swagger_output.json')

const app = express()

app.use(bodyParser.json())

apiPokemon(app, sequelize)
apiBatalha(app, sequelize)

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

module.exports = app