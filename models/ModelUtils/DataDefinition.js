const joi = require('joi');
const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;
class Datas {
    static string(name, length = 256, minleng = 5, required = false, unique = false) {
        console.log("Calling Datas.String");
        console.log(name);
        var def = {
            field_name: name,
            definition: {
                type: String,
                maxlength: length,
                trim: true
            },
            validation: joi.string().max(length).min(minleng),
            updatevalidation: joi.string().max(length).min(minleng)
        };
        if (required) {
            def.definition.required = [true, name + " can't be blank"];
            def.validation.required();
            def.updatevalidation.required();
        }
        if (unique) {
            def.definition.unique = true;
        }
        // if(Config.Debug){
        // console.log("Constructing String Definitions :");
        // console.log(Def);
        // }
        return def;
    };
    static number(name, length = 256, minleng = 5, required = false, unique = false) {
        console.log("Calling Datas.String");
        console.log(name);
        var def = {
            field_name: name,
            definition: {
                type: Number,
                maxlength: length,
                trim: true
            },
            validation: joi.number().max(length).min(minleng),
            updatevalidation: joi.number().max(length).min(minleng)
        };
        if (required) {
            def.definition.required = [true, name + " can't be blank"];
            def.validation.required();
            def.updatevalidation.required();
        }
        if (unique) {
            def.definition.unique = true;
        }
        // if(Config.Debug){
        // console.log("Constructing String Definitions :");
        // console.log(Def);
        // }
        return def;
    };
    static email(name, length = 256, minlength = 5, required = false, unique = false) {
        console.log("Calling Datas.String");
        console.log(name);

        var def = {
            field_name: name,
            definition: {
                type: String,
                maxlength: length,
                trim: true
            },
            validation: joi.string().email().min(minlength).max(length),
            updatevalidation: joi.string().email().min(minlength).max(length)
        };
        if (required) {
            def.definition.required = [true, name + " can't be blank"];
            def.validation.required();
            def.updatevalidation.required();
        }
        if (unique) {
            def.definition.unique = true;
        }
        return def;
    };
    static money(name, length = 256, minlength = 5, required = false, unique = false) {
        console.log("Calling Datas.Money");
        console.log(name);

        var def = {
            field_name: name,
            definition: {
                type: Number,
                maxlength: length,
                trim: true
            },
            validation: joi.number().min(minlength).max(length),
            updatevalidation: joi.number().min(minlength).max(length)
        };
        if (required) {
            def.definition.required = [true, name + " can't be blank"];
            def.validation.required();
            def.updatevalidation.required();
        }
        if (unique) {
            def.definition.unique = true;
        }
        return def;
    }
    static ref(name, type) {
        console.log("Calling Datas.Reference");
        console.log(name);
        var def = {
            field_name: name,
            definition: {
                type: ObjectId,
                ref: type,
                required: true
            },
            validation: '',
            updatevalidation: ''
        };
        // if (required) {
        //     def.definition.required = [true, name + " can't be blank"];
        //     def.validation.required();
        //     def.updatevalidation.required();
        // }
        // if (unique) {
        //     def.definition.unique = true;
        // }
        // if(Config.Debug){
        // console.log("Constructing String Definitions :");
        // console.log(Def);
        // }
        return def;
    }
    static country(name, length = 256, minleng = 5, required = false, unique = false) {
        console.log("Calling Datas.Country");
        console.log(name);
        var def = {
            field_name: name,
            definition: {
                type: String,
                maxlength: length,
                trim: true
            },
            validation: joi.string().max(length).min(minleng),
            updatevalidation: joi.string().max(length).min(minleng)
        };
        if (required) {
            def.definition.required = [true, name + " can't be blank"];
            def.validation.required();
            def.updatevalidation.required();
        }
        if (unique) {
            def.definition.unique = true;
        }
        // if(Config.Debug){
        // console.log("Constructing String Definitions :");
        // console.log(Def);
        // }
        return def;
    }
    static phone(name, length = 256, minlength = 5, required = false, unique = false) {
        console.log("Calling Datas.Phone");
        console.log(name);

        var def = {
            field_name: name,
            definition: {
                type: Number,
                maxlength: length,
                trim: true
            },
            validation: joi.number().min(minlength).max(length),
            updatevalidation: joi.number().min(minlength).max(length)
        };
        if (required) {
            def.definition.required = [true, name + " can't be blank"];
            def.validation.required();
            def.updatevalidation.required();
        }
        if (unique) {
            def.definition.unique = true;
        }
        return def;
    }
    static boolean(name, length = 256, minlength = 5, required = false, unique = false) {
        console.log("Calling Datas.Phone");
        console.log(name);

        var def = {
            field_name: name,
            definition: {
                type: Boolean,
                // maxlength: length,
                trim: true
            },
            validation: joi.number().min(minlength).max(length),
            updatevalidation: joi.number().min(minlength).max(length)
        };
        if (required) {
            def.definition.required = [true, name + " can't be blank"];
            def.validation.required();
            def.updatevalidation.required();
        }
        if (unique) {
            def.definition.unique = true;
        }
        return def;
    }
    static date(name, length = 256, minlength = 5, required = false, unique = false) {
        console.log("Calling Datas.Money");
        console.log(name);

        var def = {
            field_name: name,
            definition: {
                type: Date,
                maxlength: length,
                trim: true
            },
            validation: joi.string().isoDate(),
            updatevalidation: joi.string().isoDate()
        };
        if (required) {
            def.definition.required = [true, name + " can't be blank"];
            def.validation.required();
            def.updatevalidation.required();
        }
        if (unique) {
            def.definition.unique = true;
        }
        return def;
    }

}
module.exports = Datas;