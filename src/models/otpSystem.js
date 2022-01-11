const mongoose =require('mongoose');
const req = require('express/lib/request');

const otpScma= new mongoose.Schema({
    isExpire: {
        type : Boolean,
        default:false},
        
    email: {type: String},
    otp : {type:Number},
    
    date: { 
        type: Date,
        default: Date.now}
})

const Otp= mongoose.model('Otp', otpScma);

module.exports= Otp;