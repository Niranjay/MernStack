const express = require('express')
const router = express.Router();
const mongo = require('mongoose')
router.use(express.json())
const user = require("../../models/User");

// Add new User
router.post("/user-register", async (req, res) => {
    const { username, email, password  } = req.body; 
    try {
    if (!username || !email || !password ) {
        return res.json({ error: "All Field must be Filled." });
    }
        const userExist = await user.findOne({ email:email });
        if (userExist) {
            console.log("User Can't register .... Already Registerd..")
            return res.status(422).json({ error: " email Already Registerd ...." });
        }
        const usr = new user({ username, email, password })                  
        await usr.save();
        console.log("User Registerd Suceesfull")
        res.status(202).json({ message: "User Registerd Suceesfull" });

    } catch (err) { consol.log(err); }
})


module.exports = router;