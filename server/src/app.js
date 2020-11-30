const express = require('express')
const bodyParser = require('body-parser')
const router = require('./router')
const sequelize = require('./sequelize')

const app = express()
app.use(bodyParser.json())
app.use('/', router)

try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

module.exports = app