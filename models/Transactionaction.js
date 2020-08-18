const mongoose = require('mongoose');
const Datas = require('./ModelUtils/DataDefinition');
const BaseModel = require('./ModelUtils/BaseModel');

class Login extends BaseModel {
    constructor(modelname) {
        super(modelname);
        this.add(Datas.string('action'));
        this.add(Datas.ref('user','User'));
        this.add(Datas.string('reason'));
        this.getModel();
    }
}
Login = new Login('login');
module.exports = Login;
// var mongoose = require('mongoose');

// var TransactionactionSchema = mongoose.Schema({
//     action:{
//         type: String,
//         required: true,
//     },
//     user:{
//         type: Schema.ObjectId,
//         ref: 'User',
//         required: true,
//     },
//     reason:{
//         type: String,
//         required: true,
//     },

// },
// {
//     timestamps: true
// }
// );
// var Transactionaction = mongoose.model('Transactionaction',TransactionactionSchema);
// module.exports = Transactionaction;