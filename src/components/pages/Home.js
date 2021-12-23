import {useContext, useState, React, useEffect }from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MyNavbar from '../layout/MyNavbar';
import GlobaContxt from '../context/GlobalContxt';

function Home (){
    const a = useContext(GlobaContxt)
    var lname ="";
    const navigate = useNavigate()

    useEffect(()=>{
        if (localStorage.getItem("myData")) {
            const comment = JSON.parse(localStorage.getItem('myData'));
             lname= comment.name
        }
        else{
        navigate("/login")
        }
    })
    
    // const ldata= localStorage.getItem("myData")
    // const comment = JSON.parse(localStorage.getItem('myData'));



    return (
        <>
        <MyNavbar/>
        <br></br>
        
            <div className="container" style={ {backgroundColor:"#cff"}}>
                <h1>Welcome {lname} , this is home page</h1>
                {/* <p>i am {comment.age} years old.</p> */}
                </div>               

        </>
    );
};

export default Home
