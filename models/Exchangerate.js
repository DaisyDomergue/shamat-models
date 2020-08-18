const mongoose = require('mongoose');
// const joi = require('joi');
const Datas = require('./ModelUtils/DataDefinition');
const BaseModel = require('./ModelUtils/BaseModel');

class Exchangerate extends BaseModel {
    constructor(modelname) {
        super(modelname);
        this.add(Datas.ref('currencyfrom','Currency'));
        this.add(Datas.ref('currencyto','Currency'));
        this.add(Datas.number('rate'));
        this.getModel();
    }
}
Exchangerate = new Exchangerate('exchangerate');
module.exports = Exchangerate;
// var mongoose = require('mongoose');

// var ExchangerateSchema = mongoose.Schema({
//     currencyfrom:{
//         type: Schema.ObjectId,
//         ref: 'Currency',
//         required: true
//     },
//     currencyto:{
//         type: Schema.ObjectId,
//         ref: 'Currency',
//         required: true
//     },
//     rate:{
//         type: Float,
//         required: true,
//     }
// },{
//     timestamps:true
// });
// var Exchangerate = mongoose.model('Exchangerate',ExchangerateSchema);
// module.exports = Exchangerate;