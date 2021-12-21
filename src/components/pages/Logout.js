import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

export const Logout = () => {
    const navigate= useNavigate();
    localStorage.clear();
    navigate("/login")
    
    return (
        <>
      <h1>this is logOut.....</h1>
        </>
    )
}
