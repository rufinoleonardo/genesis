const ClientDAOClass = require('../data_access_layer/ClientDAO')
const Client = require('../models/Client')
const ClientDAO = new ClientDAOClass(Client)
const bcrypt = require('bcrypt')

class ClientServ {
    async FindUserByEmail(email) {
        try{
            let user = await ClientDAO.FindByEmail(email);
            console.log(user)
            return {success: true, msg: "SERVICE Client: Try do FindUserByEmail", res: user}
        }catch(err){
            return {success: false, msg: "SERVICE Client: Erro no try do FindUserByEmail", err:err}
        }
    }

    async Create(email, document, password, confirmpassword){
        if(email == "" || email == undefined || email == null){
            return {success: false, msg: "O campo de e-mail precisa estar preenchido"}
        }

        if (password != confirmpassword){
            return {success: false, msg: "As senhas não correspondem."}
        }

        if(document == '' || document == undefined || document == null){
            return {success: false, msg: "O documento precisa estar preenchido."}
        }else{
            let alreadyRegistered = await ClientDAO.FindByDocument(document)
            console.log("CONSULTANDO SE O DOCUMENTO JÁ ESTÁ CADASTRADO")
            let retorno = await alreadyRegistered.data
            if(retorno != null){
                return {success: false, msg: "Documento já cadastrado."}
            }
        }
        
        let salt = bcrypt.genSaltSync(10);
        let hash = bcrypt.hashSync(password, salt);
        
        let res = await ClientDAO.Create({
            email: email,
            document: document,
            password: hash,
            fk_role: 3
        })
        return {success: true, res: res}
    }

    async Login(email, password){
        let response = await this.FindUserByEmail(email)
        let user = response.res.data

        if(user != null){
            let correct = bcrypt.compareSync(password, user.password)
            
            if(correct){
                return { success: true, msg: "SUCESSO. Senha confere com a cadastrada.", user: user ,redirectTo: "/"}
            }else{
                return { success: false, msg: "ERRO. Senha incorreta.", redirectTo: '/login'}
            }
        }else{
            return {success: false, msg: "User não encontrado.", redirectTo: '/register'}
        }
    }
}

module.exports = ClientServ;