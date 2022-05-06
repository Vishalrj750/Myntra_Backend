const mongoose = require("mongoose")

const UsersSchema = new mongoose.Schema({
    "name":{
        type:String,
        required:true
    },
      "number":{
        type:Number,
        required:true,
        unique:true
        
    },   
    "password":{
        type:String,
        required:true
    },  "email":{
        type:String,
        required:true,
        unique:true
    }, 
     "address": {
        type:String,
        required:true
    },"city": {
        type:String,
        
    }, "zip": {
        type:Number,
        required:true
    },"conformpassword":{
        type:String,
        required:true
    }
})

const Register = new mongoose.model("Register", UsersSchema);

module.exports = Register;