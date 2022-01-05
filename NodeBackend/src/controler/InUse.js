const Student = require("../models/student");
const InUse=async (req, res) => {
        try {
            const showstu = await Student.find({ hobby: { $in: ["Technology", "Fly"] } }).select({ name: 1 });
            console.log(showstu);
            res.send(showstu);
        } catch (err) { console.log(err); }
    }
    module.exports={InUse}