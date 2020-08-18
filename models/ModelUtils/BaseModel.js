const mongoose = require('mongoose');
const joi = require('joi');

class BaseModel {
    constructor(Mn) {
        // this.definition();
        console.log("Initializing new Model from Base Model...");
        this.declare_vars();
        this.modna = Mn;
    };
    declare_vars() {
        this.field = {};
        this.validationrules = {};
        this.updatevalidationrules = {};
        this.isModel;
        this.modna;
        this.model;
    }
    add(def) {
        // if(Config.Debug){
        console.log('Adding new field to model');
        console.log(def.field_name);
        // }
        this.field[def.field_name] = def.definition;
        this.validationrules[def.field_name] = def.validation;
        this.updatevalidationrules[def.field_name] = def.updatevalidationrules;
    }
    addschema(name,def,val,upval) {
        // if(Config.Debug){
        console.log('Adding new existing schema to model',def);
        console.log(name);
        // }
        
        this.field[name] = def;
        this.validationrules[name] = val;
        this.updatevalidationrules[name] = upval;

    }
    getModel() {
        this.model = mongoose.model(this.modna, this.getSchema());
        // console.log("BaseModel.getModel this =", this);
        return this.model;
    }
    validation(obj) {
        console.log("validationg ...");
        return joi.validate(obj, this.validationrules);
    }
    create(obj) {
        const { error } = this.validation(obj);
        if (error) {
            console.log("Validation error", error);
            return {error};
        }
        console.log("BaseModel.create this.model = ", this.model);
        const m = this.model;
        return new m(obj);
    }
    getSchema() {
        return mongoose.Schema(this.field);
    }
    getValidationSchema() {
        return this.validationrules;
    }
    getUpdateValidationSchema() {
        return this.updatevalidationrules;
    }
}
module.exports = BaseModel;