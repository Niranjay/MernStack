import {useContext, useState, React, useEffect }from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MyNavbar from '../layout/MyNavbar';
import GlobaContxt from '../context/GlobalContxt';

function Home (){
    const a = useContext(GlobaContxt)

    useEffect(()=>{
        a.update();
    },[])
    // a.newState.name="hello"
    // const ldata= localStorage.getItem("myData")
    const comment = JSON.parse(localStorage.getItem('myData'));
console.warn("state testing", comment.name);
    return (
        <>
        <MyNavbar/>
        <br></br>
            <div className="container" style={ {backgroundColor:"#cff"}}>
                <h1>This is home page and i am {comment.name} </h1>
                <p>i am {a.newState.age} years old.</p>
                </div>

        </>
    );
};

export default Home
