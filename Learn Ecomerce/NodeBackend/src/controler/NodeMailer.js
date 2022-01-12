

// const { request } = require('express')
// const req = require('express/lib/request')
var nodemailer= require('nodemailer')

const newmail = "hi, this is niranjan program !"
const mailer=async (req,res)=>{
    
    const transporter = nodemailer.createTransport({
    host:'smtp.gmail.com',
    port:587,
    secure:false,
    requireTLS:true,
    auth:{
        user:"niranjan.vibgyorweb@gmail.com",
        pass:"niranjan@123"
    },
});


const mailOptions={
    from:"niranjan.vibgyorweb@gmail.com",
    to: "nniranjay@gmail.com",
    subject:'demo mail',
    text:"hi , i am Niranjan Bot ! ",
    // html: "<b>Hello World </b>"
}
transporter.sendMail(mailOptions, function(err,info){
    if(err){
        console.log(err)
    }
    else{
        console.log('email has been sent', info.response)
    }
})

}

module.exports={mailer}