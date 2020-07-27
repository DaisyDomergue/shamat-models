const mongoose = require('mongoose');
const joi = require('joi');
const jwt = require('jsonwebtoken');
const config = require('config');


class LoginModel {
    constructor() {
        this.definition();
    }
    definition() {
        this.email = {
            type: String,
            unique: true,
            required: [true, "Can't be blank"]
        };
        this.password = {
            type: String,
            required: [true, "Can't be blank"]
        };
        this.roles = {
            type: Schema.ObjectId,
            ref: 'role',
            required: true
        };
        this.isActive = {
            type: Boolean,
            required: true
        };
        this.isApproved = {
            type: Boolean,
            required: true
        };
        this.isOnHold = {
            type: Boolean,
            required: true
        }
    }
    static getSchema(){
        const schema = new mongoose.Schema(this);
        return schema;
    }
    static getValidationSchema(){
        return{
            email: joi.string().email().min(5).max(256).required(),
            password: joi.string().min(6).max(256).required(),
        }
    }
}

module.exports = LoginModel;