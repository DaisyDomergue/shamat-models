var mongoose = require('mongoose');

var AddressSchema = mongoose.Schema({
    country:{
        type: String,
        required: true,
    },
    city:{
        type: String,
        required: true,
    },
    phone:{
        type: String,
        required: true,
    },

},
{
    timestamps: true
}
);
var Address = mongoose.model('Address',AddressSchema);
module.exports = Address;