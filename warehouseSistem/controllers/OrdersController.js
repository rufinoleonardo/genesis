const express = require('express');
const router = express.Router();
const OrderServiceClass = require('../services/OrderServ');
const OrderService = new OrderServiceClass()
const loginAuth = require('../middlewares/loginAuth')


router.get('/pedidospendentes', loginAuth ,(req,res)=> {
    res.render("./orders/pending.ejs")
})

/** REST API */
router.post('/api/pedido', loginAuth ,async (req,res) => {
    let arr = req.body;

    let orderCreated = await OrderService.Create(1)
    /** 1 - Criar um pedido e armazenar um id
     *  2 - Os produtos e informaçoes do pedido serão passados por um array;
     *  3 - Serão incluidos no pedido os produtos...
     *  4 - redirecionar para a pagina de pedidos pendentes
     *  5 - renderizar os pedidos pendentes na tela.
    */

    res.json({arr: arr})
})

module.exports = router;