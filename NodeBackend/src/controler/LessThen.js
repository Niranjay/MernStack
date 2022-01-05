const Student = require("../models/student");
const LessThen = async (req, res) => {
    try {
        const showstu = await Student.find({ age: { $lt: 100 } }).select({}).limit(3);
        console.log(showstu);
        res.send(showstu);
    } catch (err) { console.log(err); }
}

module.exports = {LessThen}