import React from 'react'
import CrudApi from './CrudApi'
import {  useState, useEffect}  from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MyNavbar from '../layout/MyNavbar';

function EditData() {

    const navigate = useNavigate()
    const {id}= useParams();                 //it helps to access the url parameters from current route
    
    const[data, setData]= useState("")
    const [name, setName]=useState("")
    const [age, setAge]=useState("")
    const [hobby, setHobby]=useState("")
    const [gender, setGender]=useState("")
    const [email, setEmail]=useState("")
    const [password, setPassword]=useState("")

    
    const [stu, setStu]=useState([])
    useEffect(() => {
        // CrudApi.getlist();
        
        getlist()
        console.log(id);
      }, []);

    //   get Data on id base (prefilled form).....
      function getlist()
      {
          fetch(`http://localhost:5000/getstu/${id}`).then((response) => {response.json().then((resp)=>
          {
              setData(resp)
              setName(resp.name)
              setAge(resp.age)
              setHobby(resp.hobby)
              setGender(resp.gender)
              setEmail(resp.email)
              setPassword(resp.password)
      })
      })}


    //   Post data to Update value... 
    const editMe=()=>{
        // console.log({name,age, hobby})        
        let data={name, age, hobby, gender, email, password}
        
        fetch(`http://localhost:5000/updata/${id}`,{ method :'PATCH', headers:{'Accept':'application/json', 'Content-Type':'application/json'},
        body:JSON.stringify(data)
         } ).then((result)=>{
            // 
        // console.warn("result is :", result);
        
    })
    navigate('/users/show')
    toast.success("Data Updated Successfuly...", {position:"top-center"});
    
   
}
const genChange=(e)=>{
    const target= e.target
    const name= target.name
    const value= target.value
    // console.log(value)
    setGender(value)
    console.log(gender)

}

    
    return (
        <div>
            <MyNavbar/>
                <ToastContainer />
            <center>
            <h1>Edit Data Api</h1><br/>
            <br/><label >Enter Name : </label> 
            <input type="text" value={name} name="name" onChange={(e)=>{setName(e.target.value)}}/><br/><br/>
            <br/><label >Enter Email : </label> 
            <input type="text" value={email} name="email" onChange={(e)=>{setEmail(e.target.value)}}/><br/><br/>
            <br/><label >Enter Password : </label> 
            <input type="text" value={password} name="password" onChange={(e)=>{setPassword(e.target.value)}}/><br/><br/>

                <label >Enter Your Age : </label>

                <input type="number" value={age} name="age"  onChange={(e) => { setAge(e.target.value) }} /><br /><br />
                <label >Enter Hobby : </label>

                <input type="text" value={hobby} name="hobby" onChange={(e) => { setHobby(e.target.value) }} /><br /><br />

                <div >Gender: &nbsp;&nbsp;&nbsp;
                <input type="radio" name="gender" value="male"  onChange={genChange}  /> Male &nbsp;&nbsp;&nbsp;
                <input type="radio" name="gender" value="female" onChange={genChange}  /> Female<br /><br />
                </div>

                <button type="button" onClick={editMe}> Update</button>
            </center>


        </div>
    )
}

export default EditData
