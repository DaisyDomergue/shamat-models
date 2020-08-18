const mongoose = require('mongoose');
// const joi = require('joi');
const Datas = require('../ModelUtils/DataDefinition');
const BaseModel = require('../ModelUtils/BaseModel');

// const PersonModel = require('./Person');
const LoginModel = require('./Login');
const AddressModel = require('./Address');
const PersonModel = require('./Person');
// console.log(Person);

class User extends BaseModel {
    constructor(modelname,l,a,p) {
        super(modelname);
        console.log(l,a,p);
        this.addschema('login', l.getSchema(),l.getValidationSchema(),l.getUpdateValidationSchema());
        this.addschema('address', a);
        this.addschema('person', p);
        this.add(Datas.number('sendermaximumcritialamount'));
        this.add(Datas.number('recieverminimumcritialamount'));
        this.add(Datas.number('recieversalarypertransaction'));
        this.add(Datas.ref('senderexchangerate','exchangerate'));
        this.add(Datas.ref('commissionrate','Commissionrate'));
        this.add(Datas.boolean('isOnHold'));
        this.getModel();
    }
}
User = new User('user');
module.exports = User;
// const mongoose = require('mongoose');
// const joi = require('joi');
// const jwt = require('jsonwebtoken');



// class UserModel extends PersonModel{
//   constructor(){
//     super();
//     this.definition();
//     this.setModel();
//   }
//   definition(){
//     this.lastModifiedDate = {
//       type: Date,
//       default: Date.now
//     }
//     this.login = new LoginModel().getSchema();
//     this.address = new AddressModel().getSchema();
//     this.sendermaxcriticalamount={
//       type: Number,
//       required: true,
//     };
//     this.receivermincriticalamount={
//       type: Number,
//       required: true,
//     };
//     this.receiversalarypertransaction={
//       type: Number,
//       required: true,
//     };
//     this.senderexchangerate={
//       type: Schema.ObjectId,
//       ref: 'Exchangerate',
//       required: true
//     };
//     this.commissionrate={
//       type: Schema.ObjectId,
//       ref: 'Commissionrate',
//       required: true
//     };
//     this.isonhold={
//       type: Boolean,
//       required: true,
//     };
//   }
//   static getSchema(){
//     const schema= mongoose.Schema(this,{timestamps:true});
//   }
//   static setModel() {
//     this.User = mongoose.model('user',this.getSchema());
//   }
//   static getValidationSchema(){
//     const validationSchema = {
//       ...PersonModel.getValidationSchema(),
//       login: LoginModel.getValidationSchema(),
//       address: AddressModel.getValidationSchema(),
//     }
//     return validationSchema;
//   }
//   validateUser(user){
//     return joi.validate(user, UserModel.getValidationSchema());
//   }
//   validateUpdateUser(user){
//     return joi.validate(user, UserModel.getUpdateValidateSchema());
//   }
// }
// const usrModel = new UserModel();
// module.exports.Usr = userModel;
// module.exports.validateUser = usrModel.validateUser;
// module.exports.validateUpdateUser = usrModel.validateUpdateUser;