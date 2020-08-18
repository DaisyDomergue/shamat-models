const mongoose = require('mongoose');
// const joi = require('joi');
const Datas = require('./ModelUtils/DataDefinition');
const BaseModel = require('./ModelUtils/BaseModel');

class Commissionrate extends BaseModel {
    constructor(modelname) {
        super(modelname);
        this.add(Datas.ref('currency','Currency'));
        this.add(Datas.number('rate'));
        this.getModel();
    }
}
Commissionrate = new Commissionrate('commissionrate');
module.exports = Commissionrate;
// var mongoose = require('mongoose');

// class CommissionModel {
// // var CommissionrateSchema = mongoose.Schema({
//     constructor(){
//         this.definition();
//     }
//     definition(){
//     this.currency={
//         type: Schema.ObjectId,
//         ref: 'Currency',
//         required: true
//     };
//     this.rate={
//         type: Number,
//         required: true,
//     };
// }
// getSchema(){
//     const schema = mongoose.Schema(this);
//     return schema;
// }
// getValidationSchema(){
//     return null;
// }
// }

// var Comissionrate = mongoose.model('Commissionrate',CommissionrateSchema);
// module.exports = Comissionrate;