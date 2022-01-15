const Cart = require("../models/cart");
const Proschema = require("../models/product");
const Student = require("../models/student");

const AddCart = async (req, res) => {
    const { ProductId, Quantity, UserEmail } = req.body; 
    try {
        const proExist = await Proschema.findOne({ _id : ProductId });
        const UserData = await Student.findOne({email : UserEmail}) 
        
        if (proExist && UserData) {
            const Price = proExist.price * Quantity;
            console.log("Product Availiable..")
            const AddToCard= new Cart({ProductId: proExist._id, UserEmail:UserData.email, Quantity, Price:Price})
            await AddToCard.save();
            return res.status(202).json({ message: "Product Add To Cart .... " });
        }
        else{
            res.status(422).json({error : "Out of Stock" });
            console.log("Product Not Awailiable...")
        }
        
    } catch (err) { console.log(err); }
}

module.exports={AddCart}