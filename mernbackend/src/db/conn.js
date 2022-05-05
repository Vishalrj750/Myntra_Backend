const mongoose  = require("mongoose");

mongoose.connect('mongodb://localhost:27017/RegisterBackend',{ useNewUrlParser: true , useUnifiedTopology:true})

.then(() =>{
    console.log(`connection successful`);
}).catch((e) =>{
    console.log(e)
})



// mongoose.connect("mongodb://localhost:27017/Register", {
//     useNewUrlParser:true,
//     useUnifiedTopology:true,
//     useCreateIndex:true
// })