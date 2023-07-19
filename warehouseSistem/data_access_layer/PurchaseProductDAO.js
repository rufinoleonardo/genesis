const Generic = require("./GenericDAO");

class PurchaseProductDAO extends Generic {
    constructor(model){
        super(model);
        this.model = model;
    }

    async ListByPurchaseId(idPurchase, ProductsModel){
        try{
            let data = await this.model.findAll({
                where: {fk_purchase: idPurchase},
                include: {model: ProductsModel, right: true},
                order: [["id", "DESC"]]
            })
            return {success:true, data}
        } catch(err){
            console.log(err)
            return {success: false, msg: "DAO: catch do ListByPurchaseId", err: err}
        }
    };

    async SumItems(idPurchase){
        try{
            let sum = await this.model.sum('total', {
                where: {fk_purchase: idPurchase}
            })
            console.log(`DAO SumItems a seguir`)
            return {success: true, data: sum}
        } catch(err) {
            return {success: false, msg:`DAO PurchaseProduct: Erro no try de SumItems` ,err: err}
        }
    }
}

module.exports = PurchaseProductDAO;