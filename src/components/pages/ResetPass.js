// import { React, useEffect, createContext, useContext, useState } from 'react'
import { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MyNavbar from '../layout/MyNavbar';
import { NavLink } from 'react-router-dom';


function ResetPass(){
    const [email, setEmail] = useState("");
    const [password, setPass] = useState("");
    const [otp, setOtp] = useState("");
    const [disbl, setdisbl] = useState("disable")
    const [hid , setHid] =useState("hidden")
    const [showpass, setShowpass]= useState("hidden")
    const [emailHide, setEmailHide] = useState("")
    const [otpHide, setOtpHide] = useState("hedden")

    const [tCont, setTcont] = useState(20);
    
    useEffect(()=>{
        if(tCont>0 ){
            const timer = tCont > 0 && setInterval(()=> setTcont(tCont-1), 1000);
            clearInterval(timer);
        }

    })



    // function call on GetOTP button
    const getOTP = async (e) => {
        e.preventDefault();
        let data = {email} 
        
        if (email) {
                    fetch("http://localhost:5000/sendotp", {
                    method: 'POST', headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
                    body: JSON.stringify(data)})
                    .then((result) => {
                                        console.log(result.otp)
                                        if (getOTP) {
                                        toast.success("OTP Send sucessfully...",
                                        {
                                        position: "top-center"
                                        });
                                    setdisbl("")
                                    setHid("")
                                    setEmailHide("hidden")
                                    setOtpHide("")
                               }    
                                else {
                                    toast.error("User Not Found",
                                    {
                                     position: "top-center"
                                    });}}
                    )}
                    else{
                        toast.error("kindly enter email Id...",
                                        {
                                        position: "top-center"
                                        });
                    }
        }


// Fuction on Submit

 const resetPass=(e)=>{
     e.preventDefault();
     let data={email, otp, password}
     if(!data.password){
        toast.error("Password Can't be blank...",
        {
            position:"top-center"
        });
         
     }


    //  if(data.otp){

    //  }
     if(data.otp){
     fetch("http://localhost:5000/matchotp",{ method :'POST', headers:{'Accept':'application/json', 'Content-Type':'application/json'},
        body:JSON.stringify(data)
    } ).then((result)=>{
       console.log("result",data.email)

        console.log(result.message)
    })}
    else{
        // toast.warning("OTP Not Found...",
        // {
        //     position:"top-center"
        // });
    }

}



function showfull(e){
    e.preventDefault();
 setHid("hidden")
 setShowpass("")
 setdisbl("disable")

}
function timer(){
    const times = new Date().getTime() + 300*10000
}



    return (
        <>
        <MyNavbar />
        <br></br>

        <div className="col-sm-6 offset-sm-3" style={{ backgroundColor: "#gff" }}>
            <center > <h1>Reset Password</h1></center >
            <form>
                <div className="form-group">

                    <input type="text" className='form-control' hidden={emailHide} placeholder="Email address" name="email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                    
                    <br/><button className="btn btn-primary btn-block" hidden={emailHide} onClick={getOTP} >GetOTP</button>
                    
                    <input type="text" className='form-control' placeholder="Otp" hidden={otpHide} disabled={disbl} name="OTP"  onChange={(e) => { setOtp(e.target.value) }} />
                    <p ></p>
                    < h2 style={{textAlign: 'left'}}>{tCont}</h2><br/>
                    <br/><button onClick={getOTP} hidden={otpHide}>Resend Otp</button>
                    <br/><input type="password" className='form-control'hidden={showpass} placeholder="New Password" name="newPassword"  onChange={(e) => { setPass(e.target.value) }} />
                    <br/>
                </div>
            
               <center> <button className="btn btn-primary btn-block" hidden={hid} onClick={showfull} >Next</button></center>
               <center> <button className="btn btn-primary btn-block" hidden={showpass} onClick={resetPass} >Submit</button></center>
                <p ><NavLink to="/">GoBack</NavLink></p>
            </form>
            
        </div>
    </>
    );

};
export default ResetPass