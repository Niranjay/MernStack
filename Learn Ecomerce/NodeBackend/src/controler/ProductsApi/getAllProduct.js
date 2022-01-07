const allProduct= async (req, res) => {
    try {
        const showProduct = await product.find({});
        // console.log(showstu);
        res.send(showProduct);

    } catch (err) { console.log(err); }
}

module.exports={allProduct}