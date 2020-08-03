var mongoose = require('mongoose');

var TransactionactionSchema = mongoose.Schema({
    action:{
        type: String,
        required: true,
    },
    user:{
        type: Schema.ObjectId,
        ref: 'User',
        required: true,
    },
    reason:{
        type: String,
        required: true,
    },

},
{
    timestamps: true
}
);
var Transactionaction = mongoose.model('Transactionaction',TransactionactionSchema);
module.exports = Transactionaction;