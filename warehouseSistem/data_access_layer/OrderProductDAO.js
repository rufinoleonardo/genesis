const Generic = require("./GenericDAO");

class OrderProductDAO extends Generic{
    constructor(model){
        super(model);
    }

    async InsertOrderProducts(idOrder, arr){
        try{
            let response = await this.model.bulkCreate(arr, {
                validate: true
            })
            return {success: true, msg: "DAO: Try do InsertOrderProducts", data: response}
        } catch(err) {
            return {success: false, msg: "DAO: Catch do InsertOrderProducts", err:err}
        }
    }
}