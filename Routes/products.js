const express = require('express');
const app = express();
const productsController = require('../Controllers/products');
const bodyParser = require('body-parser');


const path = require("path")
const hbs = require("hbs");
require("../DBConnection/mongoDB");
const Register = require("../Models/registres");
const { response } = require("express");
const RegisterLogin = require("../Controllers/RegLogin")

app.use(bodyParser.json([]));

app.post('/products', productsController.createAllProducts);
app.get('/products', productsController.getAllProducts);





const views_path = path.join(__dirname, "../views");
// const partials_path = path.join(__dirname, "../templates/partials");
app.use(express.json());
app.use(express.urlencoded({extended:false}));



// console.log(path.join(__dirname , "../public"));
app.set("view engine", "hbs");

 app.set("views", views_path);
// hbs.registerPartial(partials_path)

// app.get("/", RegisterLogin.function1);



app.get("/register", RegisterLogin.function2);
//create new user
app.post("/register", RegisterLogin.function3);


app.get("/login", RegisterLogin.function4);

app.post("/login", RegisterLogin.function5);






module.exports = app;