const Sequelize = require('sequelize');
const connection = require('../database/connection');
const Order = require('./Order')
const OrderProduct = require('./OrderProduct')
const Role = require('./Role')

const Client = connection.define('clients', {
    email: {type: Sequelize.STRING, allowNull: false, unique: true},
    document: {type: Sequelize.STRING, allowNull: false, unique: true},
    password: {type:Sequelize.STRING, allowNull: false},
})

Client.belongsToMany(Order, {through: OrderProduct, foreignKey: "fk_product"})
Order.belongsTo(Client, {foreignKey: "fk_product"})

Client.hasMany(OrderProduct, {foreignKey: 'fk_client'});
OrderProduct.belongsTo(Client, {foreignKey:'fk_client'})

Client.belongsTo(Role, {foreignKey: 'fk_role'});
Role.hasMany(Client, {foreignKey: "fk_role"});

Client.sync({force: false})
Role.sync({force: false})
OrderProduct.sync({force: false})

module.exports = Client;