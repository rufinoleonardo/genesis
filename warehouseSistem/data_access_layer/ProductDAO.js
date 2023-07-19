const Generic = require("./GenericDAO");

class ProductDAO extends Generic{
    constructor(model){
        super(model);
        this.model = model
    }

    async UpdateAmount(idProduct, newAmount){
        try{
            let data = await this.model.update({amount: newAmount}, {
                where: {id: idProduct}
            })

            return({success: true, data: data})
        }catch(err){
            return({success: false, err: err})
        }   
    }

    async UpdatePrice(idProduct, newPrice){
        try{
            let data = await this.model.update({price: newPrice}, {
                where: {id: idProduct}
            })

            return {success: true, data: data}
        }catch(err){
            return {success: false, err:err}
        }
    }

    async findIdByDescription(description){
        try{
            let data = await this.model.findOne({
                where: {description: description}
            })

            return {success: true, data: []}
        
        }catch(err){
            return {success: false, err: err}
        }
    }
}

module.exports = ProductDAO;