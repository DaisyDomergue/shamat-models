const mongoose = require('mongoose');
// const joi = require('joi');
const Datas = require('./ModelUtils/DataDefinition');
const BaseModel = require('./ModelUtils/BaseModel');
var Test = require('./ModelUtils/Test');
const test = require('./ModelUtils/Test');

class Loger extends BaseModel {
    constructor(modelname) {
        super(modelname);
        this.add(Datas.string('firstname'));
        this.add(Datas.string('lastname'));
        this.add(Datas.email('useremail'));
        this.getModel();
    }
}
// var D = new Datas();
Log = new Loger('logermodel');


// console.log(L.getValidationSchema());
// LogerSchema = L.getSchema();
// console.log("L is = ", L);
// const LogerModel = L.getModel();
module.exports = Log;


