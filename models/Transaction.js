var mongoose = require('mongoose');

var Transaction = mongoose.Schema({
    sender:{
        type: Schema.ObjectId,
        ref: 'Person',
        required: true,
    },
    receiver:{
        type: Schema.ObjectId,
        ref: 'Person',
        required: true,
    },
    moneytotransfer:{
        type: Schema.ObjectId,
        ref: 'Money',
        required: true,
    },
    moneytopay:{
        type: Schema.ObjectId,
        ref: 'Money',
        required: true,
    },
    exchangerate:{
        type: Schema.ObjectId,
        ref: 'Exchangerate',
        required: true,
    },
    commissionrate:{
        type: Schema.ObjectId,
        ref: 'Commissionrate',
        required: true,
    },
    commissionamount:{
        type: Schema.ObjectId,
        ref: 'Money',
        required: true,
    },
    totalpayment:{
        type: Schema.ObjectId,
        ref: 'Money',
        required: true,
    },
    senderagnet:{
        type: Schema.ObjectId,
        ref: 'User',
        required: true,
    },
    receiveragnet:{
        type: Schema.ObjectId,
        ref: 'User',
        required: true,
    },
    admin:{
        type: Schema.ObjectId,
        ref: 'User',
        required: true,
    },
    transactionactions:{
        type: Schema.ObjectId,
        ref: 'Transactionactions',
        required: true,
    },
    status: {
        type: String, 
        required: [true, "Can't be blank"],
        uppercase: true,
        'enum': ['Opened', 'Recieved','Delivered','Completed']
    },
},
{
    timestamps: true
}
);
var Transaction = mongoose.model('Transaction',Transaction);
module.exports = Transaction;