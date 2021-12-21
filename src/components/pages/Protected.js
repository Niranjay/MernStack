import MyNavbar from '../layout/MyNavbar'
import {React, useState, useEffect }from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
function Protected(props) {
    let Cmp=props.Cmp
    const navigate= Navigate();
    useEffect(()=>{
        if(!localStorage.getItem("myData"))
        {
            navigate ("./login")
        }
    },[])
    return (
        <div>
            <Cmp/>
        </div>
    )
}

export default Protected
