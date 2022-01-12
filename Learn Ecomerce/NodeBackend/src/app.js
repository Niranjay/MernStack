// const mongoose = require('mongoose')
const  connectdb =require("../src/db/connectdb")
const express = require('express')
const router= express.Router();
const route = require("../src/Route/Router")

const app = express()
const mongo =require("mongoose");

const cors = require("cors");
app.use(cors());
app.use(route)
connectdb();

app.use(express.json());
app.use(require('../src/controler/usersControler'))

app.listen(5000, () => {
    console.log(`server is runnig at port no 5000`);
})










// Connection Creation and Creating a new DB
// mongo.connect('mongodb://localhost:27017/my_database',{useNewUrlParser: true})
// .then(()=>console.log("connection successfull...."))
// .catch((err)=>console.log(err));

// Creating Schema of database
// const mylist= new mongoose.Schema({
//         name:{type: String, required :true},
//         age: Number
// })

// Creating  collection........
// const Mylist= new mongoose.model("Mylist",mylist) 
// console.log("Collection Created");


// Creating  Documents .........
// const creDoc= async()=>{
//     try{
//         const document = new Mylist({
//             name:"Niranjan",
//                 age: 10003
//         })
//         // saving documents...
//         const result= await document.save();
//         console.log(result);
//     }
//     catch(err){
//         console.log(err);
//     }

// }

// export default creDoc




