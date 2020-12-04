module.exports = (app, sequelize ) => {
    
    const pokemonController = require('../controllers/pokemon.controller')(sequelize)    
    
    app.get('/pokemons', pokemonController.listar),        
    app.post('/pokemons', pokemonController.cadastrar),  
    app.put('/pokemons/:id', pokemonController.editar),
    app.delete('/pokemons/:id', pokemonController.deletar),
    app.get('/pokemons/:id', pokemonController.carregar)
}