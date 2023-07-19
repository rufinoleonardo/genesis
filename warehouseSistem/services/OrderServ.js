const Order = require('../models/Order');
const OrderDAOClass = require("../data_access_layer/OrderDAO")
const OrderDAO = new OrderDAOClass(Order);

class OrderService {
    Create(fk_client){
        try{
            let res = OrderDAO.Create({fk_client: fk_client, status: "pendente"})
            return {success: true, msg: "SERVICE Order: Create ok!",  res:res}
        } catch(err) {
            return {success: false, msg: "SERVICE Order: Erro no try do Create." ,err:err}
        }
    }
}

module.exports = OrderService;