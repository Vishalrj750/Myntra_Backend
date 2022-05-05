const express = require("express");
const path = require("path")
const app = express();
const hbs = require("hbs");
require("./db/conn");
const Register = require("./models/registres");
const { response } = require("express");


const port = process.env.PORT || 3000;

const static_path = path.join(__dirname, "../public");
const views_path = path.join(__dirname, "../templates/views");
// const partials_path = path.join(__dirname, "../templates/partials");
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(express.static(static_path))

// console.log(path.join(__dirname , "../public"));
app.set("view engine", "hbs");

 app.set("views", views_path);
// hbs.registerPartial(partials_path)

app.get("/", (req, res) => {
    res.render("index.hbs")

});
app.get("/register", (req, res) => {
    res.render("register.hbs")

});
//create new user
app.post("/register", async(req, res) => {
       try {
        //    console.log(req.body.name)
        //    res.send(req.body.name)

        const password = req.body.password;
        const cpassword = req.body.conformpassword;
        console.log(req.body.number)
        if(password === cpassword){
            const registerUser = new Register({
                name:req.body.name,
                number:req.body.number,
                password:req.body.password,
                conformpassword:req.body.conformpassword,
                email:req.body.email,
                address:req.body. address,
                city:req.body.city,
                state :req.body.state ,
                zip:req.body.zip
              
            })

            const registered = await registerUser.save();
            res.status(201).render("login");
        }else{
            res.send("password not matching")
        }

       } catch (error) {
           res.status(400).send(error)
       }
});

app.get("/login", (req, res) => {
    res.render("login.hbs")

});

app.post("/login", async(req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;

        const useremail = await Register.findOne({email:email});
        
        if(useremail.email === email && useremail.password === password){
            res.status(201).render("index") ;   

        }else{
            console.log("password is not correct")
        }

    } catch (error) {
        res.status(201).render("register")
    }

});






app.listen(port, () => {
    console.log(`server is running on ${port}`)
});