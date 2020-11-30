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
            const { Pokemon } = sequelize
            const pokemon = await Pokemon.create({
                tipo: req.body.tipo,
                treinador: req.body.treinador,
                nivel: 1
            })
            res.json(pokemon)
        } catch(e) {
            res.status(400).send(e.message)
        }
    })    
}