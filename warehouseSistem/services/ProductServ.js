const ProductDAOClass = require('../data_access_layer/ProductDAO');
const Product = require('../models/Product')

const ProductDAO = new ProductDAOClass(Product)

class ProductService {
    

    async Create(title, price){
        if(!title){
            return {success: false, statusCode: 400, err: "O campo Descrição é obrigatório."}
        } else if(!price){
            return {success: false, statusCode: 400 ,err: "O campo Preço é obrigatório."}
        } else{
            let alreadyInDb = await ProductDAO.findIdByDescription(title)
    
            if(!alreadyInDb){
                return {success:false, err:"Já existe um produto com esse titulo."}
            }else{
                let _price = parseFloat((price).replace(",",'.'));
                let _title = (title).toUpperCase()
                try{
                    let res = await ProductDAO.Create({title: _title , price: _price})
                    return {success: true, res: res.data}
                } catch(err){
                    return {success: false, err:err}
                }
            }
        }

    }

    async Delete(id){
        let _id= parseInt(id)
        if(!_id){
            return {success: false, err: "SERVICE: O ID precisa ser válido."}
        }else{
            try{
                let product = await ProductDAO.Delete(_id)
                return ({success: true, msg: "SERVICE: Produto cadastrado", res: product})
            } catch(err){
                return {success: false, err: "SERVICE: Erro ao deletar o ítem"}
            }
        }
    }

    async ListAll(){
        try{
            let data = await ProductDAO.List()
            return {
                success: true,
                res: data
            }
        }catch(err){
            return {
                success: false, 
                msg: "SERVICE: Erro ao obter a listagem dos Produtos. (ver ProductDAO)",
                err:err
            }
        }
    }
}

module.exports = ProductService;