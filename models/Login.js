var mongoose = require('mongoose');

var LoginSchema = new mongoose.Schema({
    email: {
      type: String, 
      unique: true, 
      required: [true, "Can't be blank"] 
    },
    upassword:{
        type: String,
        required: [true, "Can't be blank"]
    },
    roles:{
        type: Schema.ObjectId,
        ref: 'role',
        required: true
    },
    isActive:{
        type: Boolean,
        required: true
    },
    isApproved:{
        type: Boolean,
        required: true
    },
    isOnHold:{
        type: Boolean,
        required: true
    }
},{
  timestamps: true
});
var Login = mongoose.model('Login', LoginSchema);
module.exports = Login;