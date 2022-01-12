import react from 'react'
import {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import CrudApi from './CrudApi'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MyNavbar from '../layout/MyNavbar';

function PostData() {
    const [name, setName]=useState("")
    const [age, setAge]=useState("")
    const [hobby, setHobby]=useState("")
    const [gender, setGender]=useState("")
    const [email, setEmail]=useState("")
    const [password, setPassword]=useState("")

    
    const navigate = useNavigate()
    
    function saveMe() {
        console.log({name,age, hobby, gender, email, password})
        setName("");
        setAge("");
        setHobby("");
        setGender("");
        setEmail("");
        setPassword("");
        
        if(age>=3){
        let data={name, age, hobby, gender, email, password}
        
        fetch("http://localhost:5000/addstu",{ method :'POST', headers:{'Accept':'application/json', 'Content-Type':'application/json'},
        body:JSON.stringify(data)
    } ).then((result)=>{
        navigate('/users/show')          //use for redirect to CrudApi page
        
        //  alert("Data saved Successfuly...");
    })
    toast.success("Record Saved...",
                {
                    position:"top-center"
                });
    }
    else{
        toast("Kindly enter right age ");
    }
}

    // radio Button Working....
    const genChange=(e)=>{
        const target= e.target
        const name= target.name
        const value= target.value
        // console.log(value)
        setGender(value)
        console.log(gender)

    }
    
    return (
        <>
        <MyNavbar/>
        <ToastContainer />
        <div className='container'>
            <h1>Post Data Api</h1><br/>
            <br/><label >Enter Name : </label> 
            <input type="text" value={name} name="name" onChange={(e)=>{setName(e.target.value)}}/><br/><br/>
            
            <br/><label >Enter Email : </label> 
            <input type="text" value={email} name="email" onChange={(e)=>{setEmail(e.target.value)}}/><br/><br/>
            <br/><label >Enter Password : </label> 
            <input type="text" value={password} name="password" onChange={(e)=>{setPassword(e.target.value)}}/><br/><br/>
            
            <label >Enter Your Age : </label> 
            
                <input type="number" value={age} name="age" onChange={(e) => { setAge(e.target.value) }} /><br /><br />
                <label >Enter Hobby : </label>

                <input type="text" value={hobby} name="hobby" onChange={(e) => { setHobby(e.target.value) }} /><br /><br />

                
                <div >Gender: &nbsp;&nbsp;&nbsp;
                <input type="radio" name="gender" value="male"  onChange={genChange} /> Male &nbsp;&nbsp;&nbsp;
                <input type="radio" name="gender" value="female" onChange={genChange} /> Female<br /><br />
                </div>

                <button type="button" onClick={saveMe}> save</button>
                
                
            </div>
        </>
    )
}

export default PostData
