const Sequelize = require('sequelize');
const connection = require('../database/connection');

const PurchaseProduct = connection.define('purchases_products', {
    id: {type: Sequelize.INTEGER, autoIncrement: true, allowNull: false, primaryKey: true},
    amount: {type: Sequelize.FLOAT, allowNull: false},
    price: {type: Sequelize.FLOAT, allowNull: false},
    total: {type: Sequelize.DOUBLE, allowNull: false},
    fk_product: {type: Sequelize.INTEGER, allowNull: false, references: {model: "Product", key:"id"}},
    fk_purchase: {type: Sequelize.INTEGER, allowNull: false, references: {model: "Purchase", key:"id"}},
})

module.exports = PurchaseProduct;