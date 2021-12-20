import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

export const Logout = () => {
    const navigate= useNavigate();
    localStorage.clear();
    
    return (
        <>
        <navigate to= "/login" />
        </>
    )
}
