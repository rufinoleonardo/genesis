class Generic{
    constructor(model){
        this.model = model
    }

    async Create(obj){
        try{
            console.log(`GENERIC DAO: dentro do try de Create`)
            let data = await this.model.create(obj)
            console.log(`GENERIC DAO: Função do sequelize foi executada`)
            return {success: true, data: data}
        }catch(err){
            console.log(`GENERIC DAO: dentro do catch de Create.`)
            return {success: false, err: err}
        }
    };

    async List(){
        try{
            let data = await this.model.findAll({order: [["title", "ASC"]]});

            return {success: true, data: data}
        } catch(err){
            return {success: false, msg: "GENERIC SERVICE: LIST",err: err}
        }
    }

    async FindById(id){
        try{
            let data = await this.model.findOne({
                where:{id:id}
            })
            return {success: true, data: data}
        } catch(err) {
            return {success: false, err: err}
        }
    }

    async Delete(id){
        try{
            let deleting = await this.model.destroy({
                where: {id: id} // ID da tabela PurchaseProduct
            })
            return {success: true, data: deleting}
        }catch(err){
            return {success: false, err: err}
        }
    }

    async Update(id, change){
        let data = this.model.update(change, {
            where: {id: id}
        })
    }
}

module.exports = Generic;