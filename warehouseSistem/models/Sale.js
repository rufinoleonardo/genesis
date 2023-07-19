const Sequelize = require('sequelize');
const connection = require('../database/connection');

const Sale = connection.define('sales', {
})

Sale.sync({force: false})

module.exports = Sale;