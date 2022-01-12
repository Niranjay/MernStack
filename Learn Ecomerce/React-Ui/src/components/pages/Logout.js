
import { NavLink, useNavigate } from 'react-router-dom'
import React,{ useEffect } from 'react'

export const Logout = () => {
    const navigate= useNavigate()  
    // useEffect(()=>{
    //     if(!localStorage.getItem("myData"))
    //     {
    //         navigate ("/login")
    //     }

    // })
    localStorage.clear();
    navigate("/login")
    
    return (
        <>
            <div className="col-sm-10 offset-sm-4" >
            <h1  > You have been Successfuly Logout...</h1>
            <NavLink to="/">Go To Home</NavLink>
            </div>
        </>
    )
}
