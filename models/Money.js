var mongoose = require('mongoose');

var MoneySchema = mongoose.Schema({
    amount:{
        type: Float,
        required:true
    },
    currency:{
        type: Schema.ObjectId,
        ref: "Currency"
    }
},{
    timestamps:true
});
var Money = mongoose.model('Money',MoneySchema);
module.exports = Money;