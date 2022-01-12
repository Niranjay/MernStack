const Student= require("../models/student")
const stuDataById = async (req, res) => {
    try {
        const showonestu = await Student.findOne({ _id: req.params.id });

        res.send(showonestu);
    } catch (err) { console.log(err); }
}
module.exports={stuDataById}