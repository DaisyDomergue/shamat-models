var mongoose = require('mongoose');

var PersonSchema = new mongoose.Schema({
    firstname:{
      type: String,
      required: [true, "Can't be blank"],
      index: true
    },
    lastname: {
      type: String, 
      required: [true, "Can't be blank"] 
    },
    dob: {
      type: Date, 
      required: [true, "Can't be blank"] 
    },
    gender: {
      type: String, 
      required: [true, "Can't be blank"],
      uppercase: true,
      'enum': ['M', 'F']
    },
    address: {
        type: Schema.ObjectId,
        ref: 'Address',
        required: true
    }
},{
  timestamps: true
});
var Person = mongoose.model('User', PersonSchema);
module.exports = Person;