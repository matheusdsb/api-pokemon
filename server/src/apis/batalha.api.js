module.exports = (app, sequelize ) => {

    const batalhaController = require('../controllers/batalha.controller')(sequelize)

    app.post('/batalhar/:pokemonAId/:pokemonBId', batalhaController.batalhar)  
}