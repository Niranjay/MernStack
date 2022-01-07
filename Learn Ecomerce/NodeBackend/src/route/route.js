const express = require ('express');
const router = express.Router()

const addProduct=  require("../controler/ProductsApi/AddProduct")
router.get("/addproduct", addProduct.addProduct)

const allData= require("../controler/ProductsApi/getAllProduct")
router.get("/productList", allData.allProduct)

// const greterThen = require("../controler/Greterthen")
// router.get("/greterthen", greterThen.GraterThen )




module.exports = router;