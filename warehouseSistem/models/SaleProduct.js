const Sequelize = require('sequelize');
const connection = require('../database/connection');

const SaleProduct = connection.define('sales_products', {
    fk_sale: {type: Sequelize.INTEGER, allowNull: false, references: {model: 'Sale', key:'id'}},
    fk_product: {type: Sequelize.INTEGER, allowNull: false, references: {model: 'Product', key:'id'}},
    amount: {type: Sequelize.FLOAT, allowNull: false},
    price: {type: Sequelize.FLOAT, allowNull: false}
})

SaleProduct.sync({force:false});

module.exports = SaleProduct;