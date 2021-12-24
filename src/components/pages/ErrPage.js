import React,{ useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


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
        <div className="col-sm-6 offset-sm-3">
            <h1 > 404 ErrorPage</h1>
            <p >Opps! Page not Found..</p>
            </div>
        </>
    );
};

export default ErrPage
