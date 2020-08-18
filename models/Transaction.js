const mongoose = require('mongoose');
const Datas = require('./ModelUtils/DataDefinition');
const BaseModel = require('./ModelUtils/BaseModel');

class Tranaction extends BaseModel {
    constructor(modelname) {
        super(modelname);
        this.add(Datas.ref('sender','Person'));
        this.add(Datas.ref('reciever','Person'));
        this.add(Datas.ref('moneytotransfer','Money'));
        this.add(Datas.ref('moneytopay','Money'));
        this.add(Datas.ref('exchangerate','Exchangerate'));
        this.add(Datas.ref('commissionrate','Commissionrate'));
        this.add(Datas.ref('commissionamount','Money'));
        this.add(Datas.ref('totalpayment','Money'));
        this.add(Datas.ref('senderagnet','User'));
        this.add(Datas.ref('recieveragent','User'));
        this.add(Datas.ref('admin','User'));
        this.add(Datas.ref('transactionaction','Transactionaction'));
        this.add(Datas.string('status'));
        this.getModel();
    }
}
Tranaction = new Tranaction('transaction');
module.exports = Tranaction;
// var mongoose = require('mongoose');

// var Transaction = mongoose.Schema({
//     sender:{
//         type: Schema.ObjectId,
//         ref: 'Person',
//         required: true,
//     },
//     receiver:{
//         type: Schema.ObjectId,
//         ref: 'Person',
//         required: true,
//     },
//     moneytotransfer:{
//         type: Schema.ObjectId,
//         ref: 'Money',
//         required: true,
//     },
//     moneytopay:{
//         type: Schema.ObjectId,
//         ref: 'Money',
//         required: true,
//     },
//     exchangerate:{
//         type: Schema.ObjectId,
//         ref: 'Exchangerate',
//         required: true,
//     },
//     commissionrate:{
//         type: Schema.ObjectId,
//         ref: 'Commissionrate',
//         required: true,
//     },
//     commissionamount:{
//         type: Schema.ObjectId,
//         ref: 'Money',
//         required: true,
//     },
//     totalpayment:{
//         type: Schema.ObjectId,
//         ref: 'Money',
//         required: true,
//     },
//     senderagnet:{
//         type: Schema.ObjectId,
//         ref: 'User',
//         required: true,
//     },
//     receiveragnet:{
//         type: Schema.ObjectId,
//         ref: 'User',
//         required: true,
//     },
//     admin:{
//         type: Schema.ObjectId,
//         ref: 'User',
//         required: true,
//     },
//     transactionactions:{
//         type: Schema.ObjectId,
//         ref: 'Transactionactions',
//         required: true,
//     },
//     status: {
//         type: String, 
//         required: [true, "Can't be blank"],
//         uppercase: true,
//         'enum': ['Opened', 'Recieved','Delivered','Completed']
//     },
// },
// {
//     timestamps: true
// }
// );
// var Transaction = mongoose.model('Transaction',Transaction);
// module.exports = Transaction;