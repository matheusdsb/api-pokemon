module.exports = (app, sequelize ) => {
    app.get('/pokemons',  async (req, res) => {
        try {              
            const { Pokemon } = sequelize
            const lista = await Pokemon.findAll()
            res.json(lista)
        } catch(e) {
            res.status(400).send(e.message)
        }
    })
}