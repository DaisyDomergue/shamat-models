const mongoose = require('mongoose');
// const joi = require('joi');
const Datas = require('../ModelUtils/DataDefinition');
const BaseModel = require('../ModelUtils/BaseModel');

class Address extends BaseModel {
    constructor(modelname) {
        super(modelname);
        this.add(Datas.country('country'));
        this.add(Datas.phone('phone'));
        this.add(Datas.string('city'));
        this.getModel();
    }
}
Address = new Address('address');
module.exports = Address;
// const mongoose = require('mongoose');
// const joi = require('joi');

// class AddressModel{
//     constructor(){
//         this.definition();
//     };
//     definition(){
//         this.country = getSimpleStringDefinition();
//         this.city = getSimpleStringDefinition();
//         this.phone = getSimpleStringDefinition();

//     }
//     getSchema(){
//         const schema = mongoose.Schema(this);
//         return schema;
//     }
//     static getValidationSchema(){
//         return{
//             country: joi.string().max(256),
//             city: joi.string().max(256),
//             phone: joi.string().max(256),
//         }
//     }
//     static getUpdateValidationSchema(){
//         return{
//             country: joi.string().max(256),
//             city: joi.string().max(256),
//             phone: joi.string().max(256),
//         }
//     }
// }
// function getSimpleStringDefinition() {
//     return {
//         type: String,
//         maxlength: 255,
//         trim: true
//     };
// }
// module.exports = AddressModel;