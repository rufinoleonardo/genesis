const Purchase = require('../models/Purchase')
const PurchaseDAOClass = require('../data_access_layer/PurchaseDAO')
const PurchaseDAO = new PurchaseDAOClass(Purchase)

class PurchaseService {

    async Create(title) {
        if(title == "" || title == undefined){
            return {success: false, msg: "SERVICE: A descrição da compra não pode ser um valor nulo"}
        } else {
            try {
                let response = await PurchaseDAO.Create({title: title, status: "pendente"})

                return {success: true, res: response.data}
            } catch (err) {
                return {success: false, err: err}
            }
        }
    }

    async ListAll() {
        try {
            let data = await PurchaseDAO.List();
            
            return { success: true, res: data }
        } catch (err) {
            return { success: false, msg: "SERVICE: Erro ao obter listagem de Compras. Verificar PurchaseDAO List()", err: err }
        }
    }

    async GetPurchaseData(id) {
        try {
            let data = await PurchaseDAO.FindById(id)
            return { success: true, res: data }
        } catch (err) {
            return { success: true, msg: "SERVICE: erro ao obter dados do pregão. Verificar o método FindById no PurchaseDAO", err: err }
        }
    }

    async Cancel(id){
        try{
            let response = PurchaseDAO.CancelPurchaseById(id)
            return {success: true, res: response}
        }catch(err){
            return {success: false, msg: "SERVICE: Erro no try do Delete.", err: err}
        }
    }

    async Complete(id){
        try{
            let response = PurchaseDAO.CompletePurchaseById(id)
            return {success: true, res: response}
        }catch(err){
            return {success: false, msg: "SERVICE: Erro no try do Delete.", err: err}
        }
    }

}

module.exports = PurchaseService;