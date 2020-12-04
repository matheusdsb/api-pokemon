const swaggerAutogen = require('swagger-autogen')()

const doc = {
    info: {
        "version": "1.0.0", 
        "title": "API de Pokemons",
        "description": "Realiza CRUD de pokemons e efetua batalha entre eles"
    },
    host: "localhost:3001",
    basePath: "/",
    schemes: ['http'], 
    consumes: ['application/json'], 
    produces: ['application/json'], 
    tags: [
        {
            "name": "Pokemon", 
            "description": "CRUD de Pokemons"
        },
        {
            "name": "Batalha", 
            "description": "Batalha entre Pokemons"
        },        
    ],
    securityDefinitions: { }, 
    definitions: {
        Pokemon: {
            id: 1,
            tipo: "pikachu",
            treinador: "Matheus",
            nivel: 1
        },
        CriarPokemon: {
            $tipo: "Pikachu",
            $treinador: "Matheus"
        }

    }
}


const outputFile = './swagger_output.json'
const endpointsFiles = [
    './src/apis/pokemon.api.js', 
    './src/apis/batalha.api.js'
]

swaggerAutogen(outputFile, endpointsFiles, doc)