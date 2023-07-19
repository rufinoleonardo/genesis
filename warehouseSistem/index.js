const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const session = require('express-session')
const loginAuth = require('./middlewares/loginAuth')

app.use(session({
    name: 'user',
    secret: "genesi$3#0do",
    cookie: {maxAge: 30 * 60 * 1000} // 30 min
}))

// CONFIGURAÇÕES DO EXPRESS
app.set("view engine", "ejs")
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())

/** CONTROLLERS */
const ProductsController = require("./controllers/ProductsController")
const PurchasesController = require("./controllers/PurchasesController")
const OrdersController = require('./controllers/OrdersController')
const ClientsController = require('./controllers/ClientsController')

/** Usando o router */
app.use("/", ProductsController);
app.use("/", PurchasesController);
app.use("/", OrdersController);
app.use('/', ClientsController);

/** MODELS */
const Product = require('./models/Product')

app.get('/', loginAuth, async(req,res) => {
    let logado = req.session.user || "Não loggado."
    let products = await Product.findAll({order: [["title", 'ASC']]})

    res.render('index', {products: products, logado: logado})
})
    
app.listen(8080, ()=>{
    console.log("Server running.")
})