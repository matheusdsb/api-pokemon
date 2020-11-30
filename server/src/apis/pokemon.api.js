const { 
    tiposPermitidos, 
    carregarDadosRequest, 
    validarDadosCriacao, 
    validarDadosEdicao
} = require('../helpers/pokemon.helper')

module.exports = (app, sequelize ) => {
    app.get('/pokemons',  async (req, res) => {
        try {              
            const { Pokemon } = sequelize
            const lista = await Pokemon.findAll()
            res.json(lista)
        } catch(e) {
            res.status(400).send(e.message)
        }
    }),
    app.post('/pokemons',  async (req, res) => {
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
    }),  
    app.put('/pokemons/:id',  async (req, res) => {
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
    }),
    app.delete('/pokemons/:id',  async (req, res) => {
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
    }),
    app.get('/pokemons/:id',  async (req, res) => {
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
    })  
}