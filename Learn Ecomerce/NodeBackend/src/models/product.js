
const mongoose =require('mongoose');
const req = require('express/lib/request');

// define Schema
const proSchema = new mongoose.Schema({
    name:{type: String},
    quantity:{type : Number},
    avail_quantity : {type: Number},
    discription:{type: String},
    price:{type: Number}
})

// create model
const Proschema= mongoose.model('Proschema',proSchema)
module.exports=Proschema;

