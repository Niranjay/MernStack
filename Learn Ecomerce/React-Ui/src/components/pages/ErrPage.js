import React,{ useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';


const ErrPage = () => {
    const navigate= useNavigate()  
    useEffect(()=>{
        if(!localStorage.getItem("myData"))
        {
            navigate ("/login")
        }

    })
    return (
        <>
        <div className="col-sm-10 offset-sm-4" >
            <h1  > 404 ErrorPage !</h1>
            <p >Opps! Page not Found..</p>
            <NavLink to="/">Go To Home</NavLink>
            </div>

        </>
    );
};

export default ErrPage
