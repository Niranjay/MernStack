const Student = require("../models/student");
const greterthenEqual = async (req, res) => {
    try {
        const showstu = await Student.find({ age: { $gte: 30 } }).select({ name: "Niranjan" }).limit(1);
        console.log(showstu);
        res.send(showstu);
    } catch (err) { console.log(err); }
}

module.exports={greterthenEqual}