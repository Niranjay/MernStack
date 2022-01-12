const Proschema = require("../models/product")

const AddProd = async (req, res) => {
    const { name, model, categoryId,  price ,discription } = req.body; 
    try {
    if (!name || !model || !discription || !price || !categoryId) {
        return res.json({ error: "All Field must be Filled." });
    }
   
        const proExist = await Proschema.findOne({ name:name });
        if (proExist) {
            console.log("Product Can't Add To List .... Already Registerd..")
            return res.status(422).json({ error: "Product Can't Add To List .... Already Registerd.." });
        }
        const pro = new Proschema({ name, model, discription, price, categoryId })                  
        await pro.save();
        console.log("Product Registerd Suceesfull")
        res.status(202).json({ message: "Product Registerd Suceesfull" });

    } catch (err) { consol.log(err); }
}

module.exports={AddProd}