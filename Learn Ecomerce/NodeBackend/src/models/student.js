// import  mongoose  from "mongoose";
const mongoose =require('mongoose');
// const bcrypt = require('bcryptjs');
const req = require('express/lib/request');
const jwt= require('jsonwebtoken');
// var salt = bcrypt.genSaltSync(10);
// var hash = bcrypt.hashSync("B4c0/\/", salt);

// define Schema
const studentSchema = new mongoose.Schema({
    name:{type: String},
    age:{type : Number},
    hobby:{type: String},
    gender:{type: String},
    email:{type: String},
    password:{type:String, required:true},
    tokens : [{
        token:{
            type:String
        }

    }]
})



// hashng password
// studentSchema.pre('save', async function(next){
// try{
//     const salt= await bcrypt.getSalt(10);
//     // const secPass=await  bcrypt.hash(this.password, salt);

//     const hashedPass= await bcrypt.hash(this.password, salt)
//     password= hashedPass;
//     next()
// }
// catch(error)
// {
//     next(error);
// }
// })

studentSchema.methods.generateAuthToken = async function(){
    try{
        let token =jwt.sign({_id:this._id.toString()},"iamnniranjannareshsoftwareeng" );
        this.tokens= this.tokens.concat({token:token})
        await this.save();
        console.log(token)
        return token;

    }catch(err){
        console.log(err);

    }
}

// create model
const Student= mongoose.model('Student',studentSchema)

module.exports=Student;

