const express = require("express");
const router = express.Router();
const ProductServiceClass = require("../services/ProductServ")
const ProductService = new ProductServiceClass()
const loginAuth = require('../middlewares/loginAuth')


router.get('/newProduct/:idParent?', loginAuth, (req, res) => {
    let idParent = req.params?.idParent
    res.render("products/newProduct.ejs", { idParent: idParent })
})

router.post('/product/:idParent?', async (req, res) => {
    let title = req.body.title;
    let price = req.body.price;
    let idParent = req.params?.idParent

    try {
        let response = await ProductService.Create(title, price)
        console.log(`DAO de Product __ IF`)
        if (response.success) {
            console.log(`${title} foi adicionado ao BD.`)
            res.redirect(`/editpurchase/${idParent}`)
        } else {
            console.log(`DAO de Product __ ELSE`)
            res.json({ success: false, err: "CONTROLLER: Criação do produto no Banco de dados deu erro." })
        }
    } catch (err) {
        console.log(`DAO de Product __ CATCH`)
        res.json({ success: false, msg: "QUEEE", err: err })
    }
})

router.get('/deletingProduct/:id', loginAuth, async (req, res) => {
    const id = req.params.id;
    try {
        let response = await ProductService.Delete(id)

        if (response.success) {
            res.redirect("/")
        } else {
            res.json({ success: false, msg: "CONTROLLER: Não deletado, Erro no DAO.", err: response.err })
        }

    } catch (err) {
        return { success: false, msg: "CONTROLLER: Erro no try.", err: err }
    }

})

module.exports = router;