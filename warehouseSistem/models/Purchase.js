const Sequelize = require("sequelize");
const connection = require("../database/connection");
const Product = require("../models/Product")

const Purchase = connection.define('purchases', {
    title: {type: Sequelize.STRING, allowNull: false},
    status: {type: Sequelize.STRING, default: "pendente"}
})


Purchase.sync({force: false})

module.exports = Purchase;

/**
 * The A.hasMany(B) association means that a One-To-Many relationship exists between A and B,
 * with the foreign key being defined in the target model (B).
 */

