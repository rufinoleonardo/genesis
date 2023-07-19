let Generic = require('../data_access_layer/GenericDAO')

class ClientDAO extends Generic{
    constructor(model){
        super(model);
    }

    async FindByDocument(document){
        try{
            let res = this.model.findOne({
                where: {document: document}
            })

            return {success: true, data: res}
        } catch(err){
            return {success: false, msg: "DAO Client: Erro no try do FindByDocument", err: err}
        }
    }

    async FindByEmail(email){
        try{
            let data = await this.model.findOne({
                where: {email:email}
            })

            return {success: true, msg: "DAO Client: FindByEmail" ,data:data}
        }catch(err){
            return {success: false, msg: "DAO Client: Erro no try do FindByEmail", err: err}
        }
    }
}

module.exports = ClientDAO;