var mongoose = require('mongoose');

var ExchangerateSchema = mongoose.Schema({
    currencyfrom:{
        type: Schema.ObjectId,
        ref: 'Currency',
        required: true
    },
    currencyto:{
        type: Schema.ObjectId,
        ref: 'Currency',
        required: true
    },
    rate:{
        type: Float,
        required: true,
    }
},{
    timestamps:true
});
var Exchangerate = mongoose.model('Exchangerate',ExchangerateSchema);
module.exports = Exchangerate;