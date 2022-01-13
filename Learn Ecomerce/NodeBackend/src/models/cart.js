
const mongoose =require('mongoose');
const req = require('express/lib/request');

// define Schema
const cart = new mongoose.Schema({
    ProductId:{type: String},
    Quantity:{type: String},
    UserEmail:{type :String},
    Price: {type : Number}
    
})

// create model
const MyCart= mongoose.model('MyCart',cart)
module.exports=MyCart;

