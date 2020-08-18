var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;
// const mongoose = require('mongoose');
// const joi = require('joi');
const Datas = require('./ModelUtils/DataDefinition');
const BaseModel = require('./ModelUtils/BaseModel');
// var Test = require('./ModelUtils/Test');
// const test = require('./ModelUtils/Test');
// var MoneySchema = mongoose.Schema({
//     amount:{
//         type: Number,
//         required:true
//     },
//     currency:{
//         type: ObjectId,
//         ref: "Currency"
//     }
// },{
//     timestamps:true
// });
// var Money = mongoose.model('Money',MoneySchema);
// module.exports = Money;
class Money extends BaseModel {
    constructor(modelname) {
        super(modelname);
        this.add(Datas.money('amount'));
        this.add(Datas.ref('currency','Currency'));
        this.getModel();
    }
}
Money = new Money('money');
module.exports = Money;