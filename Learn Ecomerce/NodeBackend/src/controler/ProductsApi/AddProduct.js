const product = require("../../models/product");

const addProduct = async (req, res) => {
    const { name, quantity, Discripn, price } = req.body; 
    if (!name || !quantity || !Discripn || !price) {
        return res.json({ error: "All Field must be Filled." });
    }
    try {
        const proExist = await product.findOne({ name:name });
        if (proExist) {
            return res.status(422).json({ error: "Product Can't Add To List .... Already Registerd.." });
        }
        const pro = new product({ name, quantity, Discripn, price })                  
        await pro.save();
        res.status(202).json({ message: "Product Registerd Suceesfull" });

    } catch (err) { consol.log(err); }
}

module.exports = addProduct;