const AllData= async (req, res) => {
    try {
        const showstu = await Student.find({});
        // console.log(showstu);
        res.send(showstu);

    } catch (err) { console.log(err); }
}

module.exports={AllData}