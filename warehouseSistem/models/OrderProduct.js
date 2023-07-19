const Sequelize = require('sequelize');
const connection = require('../database/connection');

const OrderProduct = connection.define('orders_products', {
    fk_order: {type: Sequelize.INTEGER, allowNull: false},
    fk_product: {type: Sequelize.INTEGER, allowNull: false},
    amount: {type: Sequelize.FLOAT, allowNull: false},
    negotiation: {type: Sequelize.FLOAT},
    accepted: {type: Sequelize.BOOLEAN}
})

OrderProduct.sync({force:false})

module.exports = OrderProduct;