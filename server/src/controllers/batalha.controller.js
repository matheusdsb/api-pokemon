const CustomError = require('../erros/custom.error')
const Batalha = require('../objetos/batalha')

require('../erros/custom.error')

module.exports = (sequelize) => {    

    const dao = require('../dao/pokemon.dao')(sequelize)

    async function incrementarNivel(pokemon) {
        await pokemon.update({ nivel: pokemon.nivel + 1 })
    }

    async function decrementarNivel(pokemon) {
        await pokemon.update({ nivel: pokemon.nivel - 1 })
        if(pokemon.nivel <= 0) {
            await dao.deletarPorId(pokemon.id)
        }
    }

    const batalhar = async(req, res) => {
        try {

            const idPokemonA = req.params.pokemonAId
            const idPokemonB = req.params.pokemonBId            

            const pokemonA = await dao.listaPorIdOuLancaExcecao(idPokemonA)
            const pokemonB = await dao.listaPorIdOuLancaExcecao(idPokemonB)
                     
            const batalha = new Batalha(pokemonA, pokemonB)
            const resultado = batalha.batalhar()

            await incrementarNivel(resultado.vencedor)
            await decrementarNivel(resultado.perdedor)
            
            res.json({
                resultado
            })

        } catch(error) {            
            if (error instanceof CustomError) {
                res.status(error.statusCode).send(error.message)    
            }
            res.status(400).send(error.message)
        }
    }

    return { batalhar }
}