// import { React, useEffect, createContext, useContext, useState } from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MyNavbar from '../layout/MyNavbar';
import { NavLink } from 'react-router-dom';

function ResetPass(){
    const [email, setEmail] = useState("");
    const [password, setPass] = useState("");
    const [otp, setOtp] = useState("");
    
    // function call on onclick
    const resetForgot = async (e) => {
        e.preventDefault();
        const forgotData= await fetch("http://localhost:5000/getstu",
        {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({email})
        });
        
        const data = await resetForgot.json();
        console.log("User Info For Password Reset...", data)
    }


    // function call on GetOTP button
    const getOTP = async (e)=> {
        e.preventDefault();
        let data={email, otp}
        // if(!data.email){
        //     toast.warning("Mail Id Cant be Blank",
        //     {
        //         position:"top-center"
        //     });
        // }

            fetch("http://localhost:5000/sendotp",{ method :'POST', headers:{'Accept':'application/json', 'Content-Type':'application/json'},
                    body:JSON.stringify(data)} 
                    ).then((result)=>{
        // navigate('/users/show')          //use for redirect to CrudApi page
        console.log(data)
        if(data){
            toast.success("OTP Send sucessfully...",
            {
                position:"top-center"
            });
        }
        else{
            toast.error("User Not Found",
            {
                position:"top-center"
            });
        }
        
        //  alert("Data saved Successfuly...");
    })
    
}

 const resetPass=(e)=>{
     e.preventDefault();
     let data={email, otp, password}
     if(!data.password){
        toast.error("Password Can't be blank...",
        {
            position:"top-center"
        });
         
     }
     fetch("http://localhost:5000/matchotp",{ method :'POST', headers:{'Accept':'application/json', 'Content-Type':'application/json'},
        body:JSON.stringify(data)
    } ).then((result)=>{
        toast.success("Password changed...",
        {
            position:"top-center"
        });

        console.log(result.message)
    })
 }


    return (
        <>
        <MyNavbar />
        <br></br>

        <div className="col-sm-6 offset-sm-3" style={{ backgroundColor: "#gff" }}>
            <center > <h1>Reset Password</h1></center >
            <form>
                <div className="form-group">

                    <input type="text" className='form-control' placeholder="Email address" name="email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                    
                    <br/><button className="btn btn-primary btn-block" onClick={getOTP} >GetOTP</button>
                    <input type="text" className='form-control' placeholder="Otp" name="OTP"  onChange={(e) => { setOtp(e.target.value) }} />
                    <br/><input type="password" className='form-control' placeholder="New Password" name="newPassword"  onChange={(e) => { setPass(e.target.value) }} />
                    <br/>
                </div>
            
               <center> <button className="btn btn-primary btn-block" onClick={resetPass} >Submit</button></center>
                <p ><NavLink to="/">GoBack</NavLink></p>
            </form>
            
        </div>
    </>
    );

};
export default ResetPass