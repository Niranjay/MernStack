const express = require('express')
const router = express.Router();
const mongo = require('mongoose')
router.use(express.json())
const product = require("../models/product");

// Add new Products
router.post("/addproduct", async (req, res) => {
    const { name, model, categoryId,  price ,discription } = req.body; 
    try {
    if (!name || !model || !discription || !price || !categoryId) {
        return res.json({ error: "All Field must be Filled." });
    }
   
        const proExist = await product.findOne({ name:name });
        if (proExist) {
            console.log("Product Can't Add To List .... Already Registerd..")
            return res.status(422).json({ error: "Product Can't Add To List .... Already Registerd.." });
        }
        const pro = new product({ name, model, discription, price, categoryId })                  
        await pro.save();
        console.log("Product Registerd Suceesfull")
        res.status(202).json({ message: "Product Registerd Suceesfull" });

    } catch (err) { consol.log(err); }
})

// GetProduct by id
router.get("/productList/:id",async (req, res) => {
    try {
        const showProduct = await product.findOne({_id: req.params.id});
        console.log("Product List: ",showProduct )
        res.send(showProduct);
    } catch (err) { console.log(err); }
})

// // get by categoryId
// router.post("/productCatId", async (req, res) => {
//     try {
//         const { categoryId } = req.body;
//         console.log("My Category:", categoryId)
//         if (categoryId) {
//             const getProd = await product.find({ categoryId: categoryId })
//             console.log(getProd);
//             res.send(getProd);
//         }
//         else {
//             const showProduct = await product.find({});
//             console.log("Product List: ", showProduct)
//             res.send(showProduct);
//         }
//     } catch (e) { console.log(e); }
// })

// Get Product
router.get("/productList",async (req, res) => {
    try {
        const showProduct = await product.find({});
        // console.log("Product List: ",showProduct )
        res.send(showProduct);

    } catch (err) { console.log(err); }
})

module.exports = router;