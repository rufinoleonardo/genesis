/** DATABASE */
const Sequelize = require('sequelize')
const connection = require("../database/connection.js")

// MODELS
const Purchase = require("../models/Purchase.js");
const PurchaseProduct = require("../models/PurchaseProduct.js")

const Product = connection.define("products", {
    title: {type: Sequelize.STRING, allowNull: false},
    price: {type: Sequelize.FLOAT, allowNull:false}
})

Product.belongsToMany(Purchase,{through: 'purchases_products', as: 'Purchases', foreignKey: 'fk_product', constraints: true});
Purchase.belongsToMany(Product, {through: 'purchases_products', as: 'Products', foreignKey: 'fk_purchase', constraints: true});

Product.hasMany(PurchaseProduct, {foreignKey: 'fk_product'})
PurchaseProduct.belongsTo(Product, {foreignKey: 'fk_product'})

Purchase.hasMany(PurchaseProduct, {foreignKey: 'fk_purchase'})
PurchaseProduct.belongsTo(Purchase, {foreignKey: 'fk_purchase'})

Product.sync({force:false});
PurchaseProduct.sync({force: false});

module.exports = Product;