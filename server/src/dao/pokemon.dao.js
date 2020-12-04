const CustomError = require("../erros/custom.error")

module.exports = (sequelize) => {
    const listaPorIdOuLancaExcecao = async(id) => {
        const { Pokemon } = sequelize
        const pokemon = await Pokemon.findByPk(id)

        if(!pokemon) {
            throw new CustomError(`Pokemon com id ${id} não encontrado`, 404)
        }

        return pokemon
    }
    
    const cadastrar = async(input) => {
        const { Pokemon } = sequelize
        const pokemon = await Pokemon.create({
            tipo: input.tipo,
            treinador: input.treinador,
            nivel: 1
        })
        return pokemon        
    }

    const deletarPorId = async(id) => {
        const { Pokemon } = sequelize
        await Pokemon.destroy({
            where: {
                id: id
            }
        })
        return true        
    }

    return { listaPorIdOuLancaExcecao, cadastrar, deletarPorId }
}