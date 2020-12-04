const { 
    tiposPermitidos, 
    carregarDadosRequest, 
    validarDadosCriacao, 
    validarDadosEdicao
} = require('../helpers/pokemon.helper')
const CustomError = require('../erros/custom.error')


module.exports = (sequelize) => {

    const dao = require('../dao/pokemon.dao')(sequelize)
    
    const listar = async(req, res) => {       
        try {                          
            const { Pokemon } = sequelize
            const lista = await Pokemon.findAll()
            res.json(lista)
        } catch(e) {
            res.status(400).send(e.message)
        }         
    }
    

    const cadastrar = async(req, res) => {
        try {
            const input = carregarDadosRequest(req.body)
            validarDadosCriacao(input)            
            const pokemon = await dao.cadastrar(input)
            res.json(pokemon)
        } catch(e) {
            res.status(400).send(e.message)
        }
    }  
    
    const editar = async(req, res) => {
        try {
            const id = req.params.id

            if(!id) {
                res.status(404).send('ID do pokemon não informado')
            }
            
            const pokemon =  await dao.listaPorIdOuLancaExcecao(id)

            const input = carregarDadosRequest(req.body)
            validarDadosEdicao(input)
            
            await pokemon.update({ treinador: input.treinador })

            res.status(204).send()

        } catch(error) {
            if (error instanceof CustomError) {
                res.status(error.statusCode).send(error.message)    
            }
            res.status(400).send(error.message)   
        }
    }

    const deletar = async(req, res) => {
        try {
            const id = req.params.id            
            await dao.deletarPorId(id)
            res.status(204).send()
        } catch(e) {
            res.status(400).send(e.message)
        }
    }

    const carregar = async(req, res) => {
        try {
            const id = req.params.id
            const pokemon = await dao.listaPorIdOuLancaExcecao(id)
            res.json(pokemon)
        } catch(error) {
            if (error instanceof CustomError) {
                res.status(error.statusCode).send(error.message)    
            }
            res.status(400).send(error.message)            
        }
    }

    return { listar, cadastrar, editar, deletar, carregar }
}
