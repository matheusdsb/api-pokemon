const { Sequelize, DataTypes} = require('sequelize');
require('dotenv').config({ path: '../docker/.env' })
const loadPokemon = require('./models/pokemon')

const sequelize = new Sequelize({
    dialect: 'mssql',
    database: process.env.DATABASE_NAME,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    port: process.env.DATABASE_PORT,
    host: process.env.DATABASE_HOST,
    operatorsAliases: false,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

const Pokemon = loadPokemon(sequelize, DataTypes)

module.exports = { sequelize, Pokemon }