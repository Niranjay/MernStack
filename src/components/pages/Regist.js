import react from 'react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CrudApi from './CrudApi'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MyNavbar from '../layout/MyNavbar';

function Regist() {
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [hobby, setHobby] = useState("")
    const [gender, setGender] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword]=useState("")

const navigate= useNavigate()
   
    useEffect(()=>{
        if(localStorage.getItem("myData"))
        {
            navigate ("/home")

        }
    },[])

    function saveMe() {
        console.log({name,age, hobby, gender, email, password})
        setName("");
        setAge("");
        setHobby("");
        setGender("");
        setEmail("");
        setPassword("");
        if (age >= 12) {
            let data = {name, email, password, age, hobby, gender }

            
            fetch("http://localhost:5000/addstu", {
                method: 'POST', headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            }).then((result) => {
                navigate('/login') 
                
                // alert("Data saved Successfuly...");
                // navigate('/users/show')          //use for redirect to CrudApi page
            })
            toast("New User Ragistred Successfuly...");
        }
        else {
            toast("Kindly enter right age ");
        }
    }

    // radio Button Working....
    const genChange = (e) => {
        const target = e.target
        const name = target.name
        const value = target.value
        // console.log(value)
        setGender(value)
        console.log(gender)

    }
    return (
        <>
        <MyNavbar/>
        <ToastContainer/>
            <br />
            <center className="ma-auto" style={{ backgroundColor: "#cff" }}>
                <br />
                <h1>User Ragistration </h1>
                <div className='container' >

                    <br /><label >UserName  </label><br/>
                    <input type="text" value={name} name="name" onChange={(e) => { setName(e.target.value) }} /><br /><br />

                    <label >E-mail Address  </label>
                    <br/>
                    <input type="email" value={email} name="email" onChange={(e) => { setEmail(e.target.value) }} /><br /><br />
                    <label >Password </label>
                    <br/>
                    <input type="password" value={password} name="password" onChange={(e) => { setPassword(e.target.value) }} /><br /><br />
                    <label >Enter Your Age  </label><br/>
                    <input type="number" value={age} name="age" max="99" onChange={(e) => { setAge(e.target.value) }} /><br /><br />
                    <label >Enter Hobby  </label><br/>
                    <input type="text" value={hobby} name="hobby" onChange={(e) => { setHobby(e.target.value) }} /><br /><br />

                    <div >Gender: &nbsp;&nbsp;&nbsp;
                        <input type="radio" name="gender" value="male" onChange={genChange} /> Male &nbsp;&nbsp;&nbsp;
                        <input type="radio" name="gender" value="female" onChange={genChange} /> Female<br /><br />
                    </div>

                    <button type="button" onClick={saveMe}> save</button>
                </div>

            </center >


        </>
    )
}

export default Regist
