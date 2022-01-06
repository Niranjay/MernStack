const express = require ('express');
const addProduct = require('../controler/ProductsApi/AddProduct');
const router = express.Router()

const addProducts=  require("../controler/ProductsApi/AddProduct")
router.get("/addproduct", addProducts.addProduct)

module.exports = router;