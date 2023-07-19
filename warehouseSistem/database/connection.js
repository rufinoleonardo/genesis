const Sequelize = require('sequelize');
const connection = new Sequelize("warehouse","root","1234", {
    host: "localhost",
    dialect: "mysql"
})

/**
 * const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' });
 */

  module.exports = connection;