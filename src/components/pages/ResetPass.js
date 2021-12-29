// import { React, useEffect, createContext, useContext, useState } from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import MyNavbar from '../layout/MyNavbar';
import { NavLink } from 'react-router-dom';

function ResetPass(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
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

    return (
        <>
        <MyNavbar />
        <br></br>

        <div className="col-sm-6 offset-sm-3" style={{ backgroundColor: "#cff" }}>
            <br />
            <center > <h1>Reset Password</h1></center >
            <form>
                <div className="form-group">

                    <input type="text" className='form-control' placeholder="Email address" name="email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                    <br/>
                    <input type="text" className='form-control' placeholder="Password" name="Password"  onChange={(e) => { setEmail(e.target.value) }} />
                    <br/>
                    <input type="text" className='form-control' placeholder="Confirm Password" name="Password"  onChange={(e) => { setEmail(e.target.value) }} />
                </div>
                <br />
               <center> <button className="btn btn-primary btn-block" onClick={resetForgot} >Submit</button></center>
                <p ><NavLink to="/">GoBack</NavLink></p>
            </form>
            <br />
        </div>
    </>
    );

};
export default ResetPass