const PurchaseProductDAOClass = require('../data_access_layer/PurchaseProductDAO');
const PurchaseProduct = require('../models/PurchaseProduct');
const Product = require('../models/Product')
// const Purchase = require('../models/Purchase')
const PurchaseProductDAO = new PurchaseProductDAOClass(PurchaseProduct)

class PurchaseProductService {

    async Insert(amount, price, fk_product, fk_purchase){
        let _amount = parseFloat(amount)
        let _price = parseFloat((price).replace(',','.'))
        let _total = parseFloat((_amount * _price))

        console.log(`_total: ${_total}`)

        if(fk_product == "" || fk_product == undefined){
            console.log("Selecione um item da lista existente (ou crie um novo)")
            return {success: false, msg: "Selecione um item da lista existente (ou crie um novo)"}
        }
        
        if(amount <= 0){
            console.log("Quantidade precisa ser superior a zero.")
            return {success: false, msg: "Quantidade precisa ser superior a zero."}
        }
        
        if(price < 0){
            console.log("O preço do item precisa ser positivo.")
            return {success: false, msg: "O preço do item precisa ser positivo."}
        }
        
        if(isNaN(_total)){
            console.log(`_total está retornando um NaN. ${_total}`)
            return {success: false, msg: `_total está retornando um NaN. ${_total}`}
        }
        
        try{
            let _fk_product = parseInt(fk_product);
            let _fk_purchase = parseInt(fk_purchase);

            let response = await PurchaseProductDAO.Create({
                fk_product: _fk_product,
                fk_purchase: _fk_purchase,
                amount: _amount,
                price: _price,
                total: _total
            })

            // `amount`,`price`,`total`,`fk_product`,`fk_purchase`

            console.log(`SERVICE: a seguir response do PurchaseProductServ`)
            console.log(response)
            return {success: true, msg: "Produto associado à compra.", res: response}
        }catch(err){
            console.log(`SERVICE: Catch de Insert`)
            return {success: false, msg: "SERVICE: Erro no servidor. Verificar o metodo Create.", err: err}
        }
    }

    async GetPurchaseProducts(idPurchase){
        try{
            let data = await PurchaseProductDAO.ListByPurchaseId(idPurchase, Product)
            return {success: true, res: data}
        }catch(err){
            return {success: false, msg: "Erro no GetPurcaseProducts" ,err: err}
        }
    }

    async Delete(id){
        try{
            let response = PurchaseProductDAO.Delete(id)
            return {success: true, res: response}
        }catch(err){
            return {success: false, msg: "SERVICE: Erro no try do Delete.", err: err}
        }
    }

    async GetPurchaseTotal(idPurchase){
        try {
            let sum = PurchaseProductDAO.SumItems(idPurchase)
            return {success: true, res: sum}
        } catch(err){
            return {success: false, msg: "SERVICE PurchaseProduct: Erro no GetPurchaseTotal", err:err}
        }
    }
}

module.exports = PurchaseProductService;