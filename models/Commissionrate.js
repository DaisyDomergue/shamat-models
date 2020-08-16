var mongoose = require('mongoose');

class CommissionModel {
// var CommissionrateSchema = mongoose.Schema({
    constructor(){
        this.definition();
    }
    definition(){
    this.currency={
        type: Schema.ObjectId,
        ref: 'Currency',
        required: true
    };
    this.rate={
        type: Float,
        required: true,
    };
}
getSchema(){
    const schema = mongoose.Schema(this);
    return schema;
}
getValidationSchema(){
    return null;
}
}

var Comissionrate = mongoose.model('Commissionrate',CommissionrateSchema);
module.exports = Comissionrate;