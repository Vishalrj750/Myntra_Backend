const mongoose = require("mongoose")

const UsersSchema = new mongoose.Schema({
    "name":{
        type:String,
        required:true
    },   
    "password":{
        type:String,
        required:true 
    }, 
})

const Login = new mongoose.model("Login", UsersSchema);

module.exports = Login;