const Sequelize = require('sequelize');
const connection = require('../database/connection');

const Role = connection.define('roles', {
    title: {type: Sequelize.STRING, allowNull: false, unique: true}
}, {timestamps: false})

Role.sync({force: false})

async function InsertRoles(){
    try{
        let res = await Role.bulkCreate(
            [
                {title: 'admin'}, 
                {title: 'manager'},
                {title: 'common user'}
            ]
        )
        console.log(`Cargos adicionados ao Banco de dados`)
    } catch(err){
        console.log(`Cargos ja existentes no Banco de dados`)
    }
}

InsertRoles()

module.exports = Role;