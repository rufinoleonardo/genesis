const Generic = require("./GenericDAO");

class PurchaseDAO extends Generic{
    constructor(model){
        super(model);
        this.model = model;
    }

    async CancelPurchaseById(idPurchase){
        let id = parseInt(idPurchase);

        try{
            let response = await this.model.update({status: "canceled"}, {
                where: {id:id}
            })

            return {success: true, data: response}
        } catch(err) {
            return {success: false, msg: "DAO: Erro no try do CancelPurchaseById." ,err:err}
        }
    }

    async CompletePurchaseById(idPurchase){
        let id = parseInt(idPurchase);

        try{
            let response = await this.model.update({status: "completed"}, {
                where: {id:id}
            })

            return {success: true, data: response}
        } catch(err) {
            return {success: false, msg: "DAO: Erro no try do CancelPurchaseById." ,err:err}
        }
    }
}

module.exports = PurchaseDAO;