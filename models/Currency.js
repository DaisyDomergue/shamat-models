var mongoose = require('mongoose');

var CurrencySchema = mongoose.Schema({
    currencyname:{
        type: String,
        required: true,
        unique:true
    },
    currencyshortname:{
        type: String,
        required: true,
        unique:true
    },
    currencysymbol:{
        type: String,
        required: true,
    },
    country:{
        type: String,
        required: true,
    },

},{
    timestamps:true
});
var Currency = mongoose.model('Currency',CurrencySchema);
module.exports = Currency;