const mongoose =require('mongoose');
const req = require('express/lib/request');

// define Schema
const User = new mongoose.Schema({
    username:{type: String},
    email:{type: String},
    password : {type: String},
})

// create model
const user= mongoose.model('user',User)
module.exports=user;
