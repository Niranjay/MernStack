// import mongoose  from "mongoose";
const mongo =require("mongoose");


// Connection Creation and Creating a new DB
const connectdb = ()=>{mongo.connect('mongodb://localhost:27017/my_database',{useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>console.log("connection successfull...."))
.catch((err)=>console.log(err));}

module.exports=connectdb;