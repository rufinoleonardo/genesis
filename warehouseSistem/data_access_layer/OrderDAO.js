const Generic = require('../data_access_layer/GenericDAO');

class OrderDAO extends Generic{
    constructor(model){
        super(model);
    }
}

module.exports = OrderDAO;