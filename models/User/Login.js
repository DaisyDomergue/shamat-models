const mongoose = require('mongoose');
// const joi = require('joi');
const Datas = require('../ModelUtils/DataDefinition');
const BaseModel = require('../ModelUtils/BaseModel');

class Login extends BaseModel {
    constructor(modelname) {
        super(modelname);
        this.add(Datas.email('useremail'));
        this.add(Datas.string('password'));
        this.add(Datas.ref('roles','Role'));
        this.add(Datas.boolean('isActive'));
        this.add(Datas.boolean('isOnHold'));
        this.add(Datas.boolean('isApproved'));
        this.getModel();
    }
}
Login = new Login('login');
module.exports = Login;

// class LoginModel {
//     constructor() {
//         this.definition();
//     }
//     definition() {
//         this.email = {
//             type: String,
//             unique: true,
//             required: [true, "Can't be blank"]
//         };
//         this.password = {
//             type: String,
//             required: [true, "Can't be blank"]
//         };
//         this.roles = {
//             type: Schema.ObjectId,
//             ref: 'role',
//             required: true
//         };
//         this.isActive = {
//             type: Boolean,
//             required: true
//         };
//         this.isApproved = {
//             type: Boolean,
//             required: true
//         };
//         this.isOnHold = {
//             type: Boolean,
//             required: true
//         }
//     }
//     static getSchema(){
//         const schema = new mongoose.Schema(this);
//         return schema;
//     }
//     static getValidationSchema(){
//         return{
//             email: joi.string().email().min(5).max(256).required(),
//             password: joi.string().min(6).max(256).required(),
//         }
//     }
// }

// module.exports = LoginModel;