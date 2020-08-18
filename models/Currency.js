const mongoose = require('mongoose');
// const joi = require('joi');
const Datas = require('./ModelUtils/DataDefinition');
const BaseModel = require('./ModelUtils/BaseModel');

class Currency extends BaseModel {
    constructor(modelname) {
        super(modelname);
        this.add(Datas.string('currencyname'));
        this.add(Datas.string('currencyshortname'));
        this.add(Datas.string('currencysymbol'));
        this.add(Datas.country('country'));
        this.getModel();
    }
}
Currency = new Currency('currency');
module.exports = Currency;
// var mongoose = require('mongoose');

// var CurrencySchema = mongoose.Schema({
//     currencyname:{
//         type: String,
//         required: true,
//         unique:true
//     },
//     currencyshortname:{
//         type: String,
//         required: true,
//         unique:true
//     },
//     currencysymbol:{
//         type: String,
//         required: true,
//     },
//     country:{
//         type: String,
//         required: true,
//     },

// },{
//     timestamps:true
// });
// var Currency = mongoose.model('Currency',CurrencySchema);
// module.exports = Currency;