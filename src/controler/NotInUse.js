const Student = require("../models/student")
const notInUse = async (req, res) => {
        try {
            const showstu = await Student.find({ hobby: { $nin: ["Technology", "Fly"] } }).select({ name: 1 });
            console.log(showstu);
            res.send(showstu);
        } catch (err) { console.log(err); }
    }
    module.exports={notInUse}