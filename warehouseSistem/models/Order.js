const Sequelize = require('sequelize');
const connection = require('../database/connection');

const Order = connection.define("orders", {
    fk_client: {type: Sequelize.INTEGER, allowNull: false},
    status: {type: Sequelize.STRING, allowNull: false, default: "pendente"}
})

// Product.belongsToMany(Order, {through: Sale})
// Order.belongsToMany(Product, {through: Sale})

Order.sync({force: false})

module.exports = Order;