const express = require('express');
const router = express.Router();
const ClientServClass = require('../services/ClientServ')
const ClientServ = new ClientServClass();

router.get('/register', (req,res) => {
    res.render('clients/register.ejs')
})

router.post('/register', async(req,res)=> {
    let {email, document ,password, confirmpassword} = req.body;

    let response = await ClientServ.Create(email, document ,password, confirmpassword)
    console.log(response)

    res.redirect(`/login/${email}`)
    // res.json({res: response})
})

router.get('/login/:email?', (req,res)=> {
    let registeredEmail = req.params.email

    res.render('clients/login.ejs', {registeredEmail: registeredEmail || ''})
})

router.post('/authenticate', async (req,res) => {
    let email = req.body.email;
    let password = req.body.password;

    let response = await ClientServ.Login(email,password)

    if(response.success){
        console.log(response)
        req.session.user = {
            id: response.user.id,
            email: response.user.email,
            role: response.user.fk_role
        }

        res.redirect('/')

        //res.json({res: req.session.user, msg:'oh'})
    } else{
        res.redirect(response.redirectTo)
    }
})

router.get('/logout', (req,res) => {
    req.session.user = undefined;
    res.redirect('/login')
})

module.exports = router;