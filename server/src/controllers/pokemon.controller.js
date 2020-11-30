const { 
    tiposPermitidos, 
    carregarDadosRequest, 
    validarDadosCriacao, 
    validarDadosEdicao
} = require('../helpers/pokemon.helper')


module.exports = (sequelize) => {
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

            const { Pokemon } = sequelize
            const pokemon = await Pokemon.create({
                tipo: input.tipo,
                treinador: input.treinador,
                nivel: 1
            })
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

            const { Pokemon } = sequelize
            const pokemon = await Pokemon.findByPk(id)

            if(!pokemon) {
                res.status(404).send('Pokemon não encontrado')
            }

            const input = carregarDadosRequest(req.body)
            validarDadosEdicao(input)
            
            await pokemon.update({ treinador: input.treinador })

            res.status(204).send()

        } catch(e) {
            res.status(400).send(e.message)
        }
    }

    const deletar = async(req, res) => {
        try {
            const id = req.params.id

            const { Pokemon } = sequelize
            await Pokemon.destroy({
                where: {
                    id: id
                }
            })

            res.status(204).send()

        } catch(e) {
            res.status(400).send(e.message)
        }
    }

    const carregar = async(req, res) => {
        try {
            const id = req.params.id

            const { Pokemon } = sequelize
            const pokemon = await Pokemon.findByPk(id)

            if(!pokemon) {
                res.status(404).send('Pokemon não encontrado')
            }

            res.json(pokemon)

        } catch(e) {
            res.status(400).send(e.message)
        }
    }

    return { listar, cadastrar, editar, deletar, carregar }
}