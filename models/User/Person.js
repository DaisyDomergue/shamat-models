const mongoose = require('mongoose');
const mongoose = require('joi');

class PersonModel{
  constructor(){
    this.definition();
  }
  definition(){
    this.firstname={
      type: String,
      required: [true, "Can't be blank"],
      index: true
    };
    this.middlename={
      type: String,
      required: [true, "Can't be blank"],
      index: true
    };
    this.lastname= {
      type: String, 
      required: [true, "Can't be blank"] 
    };
    this.dob= {
      type: Date, 
      required: [true, "Can't be blank"] 
    };
    this.gender= {
      type: String, 
      required: [true, "Can't be blank"],
      uppercase: true,
      'enum': ['M', 'F']
    };
}
getSchema() {
  const schema = mongoose.Schema(this);
  return schema;
}
static getValidationSchema() {
  return {
      firstName: joi.string().required().min(1).max(50),
      middleName: joi.string().allow(''),//.min(0).max(50),
      lastName: joi.string().required().min(1).max(50),
      gender: joi.string().required(),
      dob: joi.date().required(),
  };
}
static getSoftValidationSchema() {
  return {
      firstName: joi.string().required().min(1).max(50),
      middleName: joi.string().allow('').max(50),
      lastName: joi.string().allow('').max(50),
      gender: joi.string().allow(''),
      dob: joi.date().allow(''),
  };
}
static getUpdateValidationSchema(){
  return {
      firstName: joi.string().min(1).max(25).trim(),
      middleName: joi.string().allow('').trim(),
      lastName: joi.string().min(1).max(25).trim(),
      gender: joi.string().valid("MALE", "FEMALE"),
      dob: joi.string().isoDate(),
  };
}
}

module.exports = Person;