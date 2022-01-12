const express = require('express')
const bcrypt = require('bcrypt');

const saltRounds= 10;
// var salt = bcrypt.genSaltSync(10);
var jwt = require('jsonwebtoken');
const JWT_SECRET= 'NiramanGood$#@!';

const router = express.Router();
const mongo = require('mongoose')

// const app =express();
router.use(express.json())

// const bcrypt = require('bcrypt');
const saltRound = 10;
const Student = require("../models/student");
const Otp = require("../models/otpSystem");             //OTP schema Connection
const Proschema = require("../models/product");             //PRODUCT schema Connection
const { getSalt } = require('bcryptjs');









// router.get("/getstu" )

// Get stuData  By ID
router.get("/getstu/:id", async (req, res) => {
    try {
        const showonestu = await Student.findOne({ _id: req.params.id });

        res.send(showonestu);
    } catch (err) { console.log(err); }
})

// Get StuData  By email
router.get("/getstu/", async (req, res) => {
    try {
        const email = req.body;
        const showonestu = await Student.findOne({ email: email });
        res.send(showonestu);
    } catch (err) { console.log(err); }
})



// Update Stu Documents

const upDoc = async (req, res, id) => {
    try {
        const { name, age, hobby, gender, email, password } = req.body;
        console.warn(name);
        const result = await Student.updateOne({ id },
            {
                $set: {
                    name: name,
                    age: age,
                    hobby: hobby,
                    gender: gender,
                    email: email,
                    password: password
                }
            }, { new: true });
        console.log("Name Change :", result);
        res.status(201).json({ massage: "Record Updated..." })

    } catch (err) {
        console.log(err);
    }
}


// Add new DaTa
router.post("/addstu", async (req, res) => {
    const { name, age, hobby, gender, email, password } = req.body;

    // let hash = bcrypt.hashSync(req.body.password, salt);     //use hashing for password
    // let password= hash;
    // console.log("hash value testing..", password)   
    if (!name || !age || !hobby || !email || !password) {
        return res.json({ error: "All Field must be Filled." });
    }
    try {
        
        const userExist = await Student.findOne({ email: email });

        if (userExist) {
            return res.status(422).json({ error: "Email Already Registerd.." });
        }
        
        let hash = bcrypt.hashSync(req.body.password, saltRounds);
        const stu = new Student({ name, age, hobby, gender, email, password:hash })                  //Using Hash for password...
        
        const token = await stu.generateAuthToken();

        // cookies Create
        
res.cookie("Cookies_Name", token,{
    expires:new Date(Date.now()+30000),
    httpOnly: true});

        await stu.save();

        res.status(202).json({ message: "User Registerd Suceesfull" });

    } catch (err) { console.log(err); }
})


// Add new Products
router.post("/addproduct", async (req, res) => {
    const { name, model, categoryId,  price ,discription } = req.body; 
    try {
    if (!name || !model || !discription || !price || !categoryId) {
        return res.json({ error: "All Field must be Filled." });
    }
   
        const proExist = await Proschema.findOne({ name:name });
        if (proExist) {
            console.log("Product Can't Add To List .... Already Registerd..")
            return res.status(422).json({ error: "Product Can't Add To List .... Already Registerd.." });
        }
        const pro = new Proschema({ name, model, discription, price, categoryId })                  
        await pro.save();
        console.log("Product Registerd Suceesfull")
        res.status(202).json({ message: "Product Registerd Suceesfull" });

    } catch (err) { console.log(err); }
})

// Get Product
router.get("/productList",async (req, res) => {
    try {
        const showProduct = await Proschema.find({});
        // console.log("Product List: ",showProduct )
        res.send(showProduct);

    } catch (err) { console.log(err); }
})


// GetProduct by id
router.get("/productList/:id",async (req, res) => {
    try {
        const showProduct = await Proschema.findOne({_id: req.params.id});
        console.log("Product List: ",showProduct )
        res.send(showProduct);
    } catch (err) { console.log(err); }
})



// Add OTP
router.post("/sendotp", async (req, res) => {
    const {email, otp} = req.body;
    if (!email) {
        return res.json({ error: "Kindly enter email id" });
    }
    try{
            const userExist = await Student.findOne({ email: email });
            if (userExist) {
                const newOtp = Math.floor(100000 + Math.random() * 900000);
                const otp = new Otp({ email, otp :newOtp, isExpire: false}) 
                mailer(email,otp)
                await otp.save();                       //Save OTP Schema with value

                return res.status(202).json({ message: "OTP Send." });
            }
            else{
                return res.status(422).json({ error: "User Not Found..." });
            }
    } catch (err) { console.log(err); }
})
// nodeMailer
const mailer = (email,otp) => {
    var nodemailer = require('nodemailer');
    var transporter = nodemailer.createTransport({
        service : 'gmail',
        port : 587,
        secure : false,
        auth:{
            user:'niranjan.vibgyorweb@gmail.com',
            pass:'niranjan@123'
        }
    });

    var mailOptions = {
        from:'niranjan.vibgyorweb@gmail.com',
        to:`${email}`,
        subject:'OTP Varify ',
        text:`OTP is : ${otp.otp}`
    };

    transporter.sendMail(mailOptions, function(error,info){
        if(error)
        {
            console.log(error);
        }
        else
        {
            console.log('email sent:' + info.response)
        }
    });

}




// Match Otp API
router.post("/matchotp", async (req, res) => {
    const { otp, email, password } = req.body;
    if (!otp) {
        return res.status(400).json({ error: "Please fill OTP" });
    }
    else {
        const resetUser = await Otp.findOne({ email: email });
        // console.log(resetUser)
        if (resetUser) {

            const matchOtp = await Otp.findOne({ otp: otp, email: email, isExpire: false });
            if (matchOtp) {
                const timerOtp = matchOtp.date;
                const checkEx = new Date() - timerOtp
                console.log("HOHOHO Time Gap", checkEx)

                // const gapTime = await Otp.find({"Date":{$lt:new Date(), $gt:new Date(new Date().getTime()-(timerOtp))}})
                // const gapTime = await Otp.find({"otp":{ $lt : new Date(new Date().getTime()-(timerOtp))}})
                // const dataGapTime = await Otp.find({otp: {$lt:1}})
                // console.log("sdfghjkl",gapTime,"hahahahaha",dataGapTime)

                if (matchOtp) {
                    const logUser = await Student.findOne({ email: email });
                    let hash = bcrypt.hashSync(req.body.password, saltRounds);
                    if (checkEx < 1000000) {
                        logUser.password = hash;
                        matchOtp.isExpire = true;
                        matchOtp.save();
                        logUser.save();
                        return res.status(202).json({ message: "OTP Matched and Password Updated.." });
                    }
                    else {
                        console.log("OTP Expire")
                        return res.status(405).json({ message: "OTP Expire...." });
                    }
                }
                else {
                    console.log("Eroor...");
                    // if(checkEx > 100000){
                    //     matchOtp.isExpire = true;
                    //     matchOtp.save();
                    // }
                    return res.status(404).json({ message: "Wrong OTP.." });
                }
            }
            else {
                return res.status(404).json({ message: "Wrong OTP.." });
            }

        }
        else {
            return res.status(404).json({ error: "User Not Found" });
        }
    }
})



// Login Part 
router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: "Please fill the tha data" });
        }
        const logUser = await Student.findOne({ email: email });
        if (logUser) {                                   //use to find if user Exist or not
            
            const isMatch = await bcrypt.compare(password, logUser.password);         //Use to match data from bcrypt
            
            const token = await logUser.generateAuthToken()                        //Genrate Dynamic Token
            console.log("My Token is : ",token);
            res.cookie("jwToken", token, {
                expires: new Date(Date.now() +25892000000),
                httpOnly : true
            })

            if (isMatch) {          //if user found so match the password
                
                res.status(202).json({ message: "Login Suceesfull", logUser });
                
                // const mysalt= getSalt(hash);
                // console.warn("salt is ",mysalt)
                

                console.warn("Login Successful and token is:", token);
            } else {
                res.send({ message: "Invalid Credentials " })
                console.warn("Invalid Credential");
            }

        } else {

            res.send({ message: "User not Found" })
        } 
    } catch (err) {
            console.log(err);
    }
})


// Update data on id based....
router.patch("/updata/:id", async (req, res) => {
        const _id = req.params.id;
        
        let hash = bcrypt.hashSync(req.body.password, saltRounds);
        const { name, age, hobby, gender, email, password} = req.body;
        // const stu = new Student({ name, age, hobby, gender, email, password:hash })                  //Using Hash for password...
        // const token = await stu.generateAuthToken();

        console.warn(name, age, hobby, _id, email, password);
        // upDoc(id)

        const result = await Student.findByIdAndUpdate({ _id },
            {
                $set: {
                    name: name,
                    age: age,
                    hobby: hobby,
                    gender: gender,
                    email: email,
                    password: hash
                }
            }, { new: true });
        console.log("New Value Inserted :", result);

    })

// Delete data on id based....
router.delete("/delstu/:id", async (req, res) => {
        const id = req.params.id
        try {
            const delstu = await Student.findByIdAndDelete(id);
            console.log("Document Deleted...");
            res.status(201).json({ massage: "Doument Deleted...." })

        } catch (err) {
            console.log("del err: ", err);
        }
    })

exports.getById = (req, res) => {
        Student.getElementById(req.params.id, (err, stu) => {
            if (err)
                res.send(err);
            console.log("Single Data:", stu);
            res.send(JSON.stringify({ status: 200, error: null, response: stu }));
        })
    }

    
module.exports = router;