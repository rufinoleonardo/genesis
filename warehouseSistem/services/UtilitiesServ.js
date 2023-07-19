class Utilities {
    constructor(){

    }

    FormatAsReal(floatValue){
        let parsingToString = floatValue?.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
        return parsingToString;
    }

    ReturningArrWithBrCurrency(arr){
        let initialThis = this.FormatAsReal;
        let formated =  arr.map( function (eachRegister) {
            return {
                id: eachRegister.id,
                title: eachRegister.product.title,
                amount: eachRegister.amount,
                price: initialThis(eachRegister.price),
                total: initialThis(eachRegister.total)
            }
        })

        return formated
    }
}

module.exports = new Utilities();