
const mongo = require("mongoose");

// Connection Creation and Creating a new DB
const connectDb = ()=>{mongo.connect('mongodb://localhost:27017/my_database',{useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>console.log("connection successfull...."))
.catch((err)=>console.log(err));}

module.exports=connectDb;