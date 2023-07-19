const express = require('express');
const router = express.Router();
const PurchaseServiceClass = require('../services/PurchaseServ');
const ProductServiceClass = require('../services/ProductServ');
const PurchaseProductServiceClass = require('../services/PurchaseProductServ');
const UtilitiesServ = require('../services/UtilitiesServ');
const loginAuth = require('../middlewares/loginAuth');


const PurchaseService = new PurchaseServiceClass();
const ProductService = new ProductServiceClass();
const PurchaseProductService = new PurchaseProductServiceClass();

/** 1 - IMPORTAR O SERVICE DE LISTAGEM DE COMPRA */


router.get('/editpurchase/:id', loginAuth ,async (req,res) => {
    let id = req.params.id;

    let purchaseResponse = await PurchaseService.GetPurchaseData(id)  
    let productsResponse = await ProductService.ListAll()
    let purchaseProductResponse = await PurchaseProductService.GetPurchaseProducts(id)
    let purchaseTotalResponse = await PurchaseProductService.GetPurchaseTotal(id)

    
    let purchase = await purchaseResponse.res.data
    let products = await productsResponse.res.data
    let purchaseProducts = await purchaseProductResponse.res.data
    let purchaseTotal = await purchaseTotalResponse.res

    let formatedTotal = UtilitiesServ.FormatAsReal(purchaseTotal.data)
    let formatedPurchaseP = UtilitiesServ.ReturningArrWithBrCurrency(purchaseProducts)
    
    //res.json({res: formatedPurchaseP})
    res.render("purchases/editpurchase", {purchase, products, formatedPurchaseP, formatedTotal})
}) // obtendo dados de um pedido.

router.get('/visualizePurchase/:id', loginAuth , async (req,res) => {
    let id = req.params.id;

    let purchaseResponse = await PurchaseService.GetPurchaseData(id)  
    let purchaseProductResponse = await PurchaseProductService.GetPurchaseProducts(id)

    let purchase = purchaseResponse.res.data
    let purchaseProducts = purchaseProductResponse.res.data

    let formatedPurchaseP = UtilitiesServ.ReturningArrWithBrCurrency(purchaseProducts)
    
    //res.json({res: purchaseProductResponse})
    res.render("purchases/visualizepurchase", {purchase, formatedPurchaseP})
}) // obtendo dados de um pedido.


router.get('/purchases', loginAuth, async(req,res) => {
    let response = await PurchaseService.ListAll()  

    let ArrPurchases = response.res.data.map( el => {
        return {
            id: el.id,
            title: (el.title).toUpperCase(),
            status: el.status,
            updatedAt: `${((el.updatedAt).getDate()).toString().padStart(2,"0")}/${((el.updatedAt).getMonth()).toString().padStart(2,"0")}/${(el.updatedAt).getFullYear()}`
        }
    })

    res.render("purchases/purchases.ejs", {purchases: ArrPurchases})
}) // listando todos os pedidos

// É PARA OS GETS ESTAREM OKS

router.post('/purchase', loginAuth ,async (req,res) => {
    let title = req.body.title;

    let response = await PurchaseService.Create(title)

    if(response.success){
        let id = response.res.id
        //res.json({res: newPurchase})
        res.redirect(`/editpurchase/${id}`)
    }else{
        res.redirect('/purchases')
    }
}) // criando uma compra

router.post('/insertPurchaseProduct', loginAuth , async (req,res) => {
    // body values fkproduct, fkpurchase, amount, price
    
    let fk_product = req.body.selection;
    let fk_purchase = req.body.purchasevalue;
    let amount = req.body.amount;
    let price = req.body.price;
    
    let response = await PurchaseProductService.Insert(amount, price, fk_product, fk_purchase)

    res.redirect(`/editpurchase/${fk_purchase}`)
})

router.get('/deletePurchaseProduct/:idPurchase/:id', loginAuth ,async (req, res) => {
    const id = parseInt(req.params.id);
    const idPurchase = parseInt(req.params.idPurchase)

    let response = await PurchaseProductService.Delete(id)

    res.redirect(`/editpurchase/${idPurchase}`)
})

router.get('/cancelPurchase/:id', async (req,res) => {
    let id = req.params.id;

    let response = await PurchaseService.Cancel(id);
    res.redirect(`/visualizePurchase/${id}`);
})

router.get('/completePurchase/:id', async (req,res) => {
    let id = req.params.id;

    let response = await PurchaseService.Complete(id);
    res.redirect(`/visualizePurchase/${id}`);
})

module.exports = router;