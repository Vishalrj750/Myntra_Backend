const LoginModel = require('../Models/logins');
const RegisterModel = require('../Models/registres');

require("../DBConnection/mongoDB");
// async function function1(req, res, next) {
//     res.render("index.hbs")
// }

async function function2(req, res, next) {
    res.render("register.hbs")
}

async function function3(req, res, next) {
    try {
        //    console.log(req.body.name)
        //    res.send(req.body.name)

        const password = req.body.password;
        const cpassword = req.body.conformpassword;
        console.log(req.body.password)
        if(password === cpassword){
            const registerUser = new RegisterModel({
                name:req.body.name,
                number:req.body.number,
                password:req.body.password,
                conformpassword:req.body.conformpassword,
                email:req.body.email,
                address:req.body. address,
                city:req.body.city,
                zip:req.body.zip
              
            })
            const registered = await registerUser.save();

           
            res.status(201).render("login");
            // const registered = await RegisterModel.insert(registerUser);
        //     const body = req.body;
        //    const response = await RegisterModel.insert(body);
        //      res.json(response);
        }else{
            res.status(400).send(error)
        }

       } catch (error) {
           res.status(400).send(error)
       }
}


async function function4(req, res, next) {
    res.render("login.hbs")
}

async function function5(req, res, next) {
    try {
        const email = req.body.email;
        const password = req.body.password;

        const useremail = await RegisterModel.findOne({email:email});
      
        if(useremail.email === email && useremail.password === password){
            res.status(201).json({status:true});

        }else{
            res.status(201).json({status:false});
        }

    } catch (error) {
        res.status(201).render("register")
    }

}

module.exports = {
    // function1,
    function2,
    function3,
    function4,
    function5,


}