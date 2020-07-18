var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    login:{
      type: Schema.ObjectId,
      ref: 'Login',
      required: true
    },
    sendermaxcriticalamount:{
      type: Number,
      required: true,
    },
    receivermincriticalamount:{
      type: Number,
      required: true,
    },
    receiversalarypertransaction:{
      type: Number,
      required: true,
    },
    senderexchangerate:{
      type: Schema.ObjectId,
      ref: 'Exchangerate',
      required: true
    },
    commissionrate:{
      type: Schema.ObjectId,
      ref: 'Commissionrate',
      required: true
    },
    isonhold:{
      type: Boolean,
      required: true,
    },
},{
  timestamps: true
});
var User = mongoose.model('User', UserSchema);
module.exports = User;