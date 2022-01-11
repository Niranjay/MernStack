
const mongoose =require('mongoose');
const req = require('express/lib/request');

// define Schema
const proSchema = new mongoose.Schema({
    name:{type: String},
    model:{type: String},
    categoryId:{type :Number},
    price:{type: Number},
    discription:{type: String}
})

// create model
const Proschema= mongoose.model('Proschema',proSchema)
module.exports=Proschema;

