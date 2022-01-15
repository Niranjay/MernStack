
const mongoose =require('mongoose');
const req = require('express/lib/request');

// define Schema
const cart = new mongoose.Schema({
    
    product : {
      type: Array
    },
    UserEmail:{type :String},
    Price: {type : Number}
})

// create model
const MyCart= mongoose.model('MyCart',cart)
module.exports=MyCart;
