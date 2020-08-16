var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

var MoneySchema = mongoose.Schema({
    amount:{
        type: Number,
        required:true
    },
    currency:{
        type: ObjectId,
        ref: "Currency"
    }
},{
    timestamps:true
});
var Money = mongoose.model('Money',MoneySchema);
module.exports = Money;