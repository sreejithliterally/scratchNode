const mongoose = require('mongoose');
const validator = require('validator');



const User = mongoose.model('User', {
    name: {
        type: String,
        required: true, 
    },
    age: {
        type: Number,
        required: true,
    },
    email:{
        type: String,
        required: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("its not a valid email")
            }

        }
    },
    password:{
        type: String,
        required: true,
        validate(value){
            if(value.includes("password")){
                throw new Error("Password should not be password")
            }
        }

    }
});

module.exports = User