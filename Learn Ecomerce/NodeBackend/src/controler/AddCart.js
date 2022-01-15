const Cart = require("../models/cart");
const Proschema = require("../models/product");
const Student = require("../models/student");

const AddCart = async (req, res) => {

    let prod =[{
        produId :"",
        quanti : ""
    }];
    const { ProductId, quantity, UserEmail } = req.body; 
    

    try {
        const proExist = await Proschema.findOne({ _id : ProductId });


        const UserData = await Student.findOne({email : UserEmail}) 
        
        if (proExist || UserData) 
        {
            const pId= proExist._id;
            let length = prod.length-1
            console.log("lenght is :", length)
            prod[length].produId=pId;
            prod[length].quanti = quantity;

            // prod = {pId, Quantity}
            
            const Price = proExist.price * quantity;
            
            const AddToCard= new Cart({product : prod , UserEmail: UserData.email, Price})

            console.log("testing....",prod,"Price .", Price)

            await AddToCard.save();
            return res.status(202).json({ message: "Product Add To Cart .... ", prod });
        }
        else{
            res.status(422).json({error : "Out of Stock" });
            console.log("Product Not Awailiable...")
        }
        
    } catch (err) { console.log(err); }
}

module.exports={AddCart}