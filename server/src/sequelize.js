const { Sequelize, DataTypes} = require('sequelize');
require('dotenv').config({ path: '../docker/.env' })

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

const Pokemon = sequelize.define('Pokemon', {
    id: {
        type: DataTypes.NUMBER,
        primaryKey: true
    },
    tipo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    treinador: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nivel: {
        type: DataTypes.NUMBER
    }
});

module.exports = sequelize;