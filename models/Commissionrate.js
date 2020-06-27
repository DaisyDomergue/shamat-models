var mongoose = require('mongoose');

var CommissionrateSchema = mongoose.Schema({
    currency:{
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
var Comissionrate = mongoose.model('Commissionrate',CommissionrateSchema);
module.exports = Comissionrate;