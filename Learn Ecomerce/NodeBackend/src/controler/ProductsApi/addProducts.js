const express = require('express')
const router = express.Router();
const mongo = require('mongoose')
router.use(express.json())
const product = require("../../models/product");

// Add new Products
router.post("/addproduct", async (req, res) => {
    const { name, quantity, avail_quantity, discription, price  } = req.body; 
    try {
    if (!name || !quantity || !discription || !price || !avail_quantity) {
        return res.json({ error: "All Field must be Filled." });
    }
   
        const proExist = await product.findOne({ name:name });
        if (proExist) {
            console.log("Product Can't Add To List .... Already Registerd..")
            return res.status(422).json({ error: "Product Can't Add To List .... Already Registerd.." });
        }
        const pro = new product({ name, quantity, discription, price, avail_quantity })                  
        await pro.save();
        console.log("Product Registerd Suceesfull")
        res.status(202).json({ message: "Product Registerd Suceesfull" });

    } catch (err) { consol.log(err); }
})




// Update Product
router.post("/updateproduct", async (req, res) => {
    const { name, quantity, discription, price, avail_quantity } = req.body; 
    try {
    if (!name || !quantity || !avail_quantity || !discription || !price) {
        return res.json({ error: "All Field must be Filled." });
    }
   
        const proExist = await product.findOne({ name:name });
        if (proExist) {
            return res.status(422).json({ error: "Product Can't Add To List .... Already Registerd.." });
        }
        const pro = new product({ name, quantity, discription, price, avail_quantity })                  
        await pro.save();
        console.log("Product Registerd Suceesfull")
        res.status(202).json({ message: "Product Registerd Suceesfull" });

    } catch (err) { consol.log(err); }
})

module.exports = router;