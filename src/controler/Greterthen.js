const Student = require("../models/student");
// const Student = require("../models/student")
const GraterThen = async (req, res) => {
    try {
        const showstu = await Student.find({ age: { $gt: 30 } }).select({ name: 1 });
        console.log(showstu);
        res.send(showstu);
    } catch (err) { console.log(err); }
}
module.exports= {GraterThen};