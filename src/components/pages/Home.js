import {useContext, useState, React, useEffect }from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MyNavbar from '../layout/MyNavbar';


function Home (){

    return (
        <>
        <MyNavbar/>
        <br></br>
            <div className="container" style={ {backgroundColor:"#cff"}}>
                <h1>This is home page </h1>
                </div>

        </>
    );
};

export default Home
