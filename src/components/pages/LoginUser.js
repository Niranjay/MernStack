import { React, useEffect, createContext, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MyNavbar from '../layout/MyNavbar';

function LoginUser() {
    // const { luser, setLuser } = useContext(MyNewContxt)

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()

    useEffect(() => {
        if (localStorage.getItem("myData")) {
            navigate("/home")
        }
    }, [])
    const login = async (e) => {
        e.preventDefault();
        const res = await fetch("http://localhost:5000/login",
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email,
                    password
                })
            });
        const data = await res.json();
        console.log("User Info on Login...", data)
        const LuserData= data.message;
        const Luser=data.logUser
        console.log("My Login User Data1 : ", Luser)
        console.log("Massage to user on login : ", LuserData)
        
        // setLuser (data.user)              //Transfer value to Context     
        if (LuserData==="Login Suceesfull") {
            window.alert("Login success...." )
            localStorage.setItem('myData', JSON.stringify(Luser));
            navigate("/home")
        }
        else {
            window.alert("Invalid Credentials")
            
            // console.warn("set LUser :", luser);
        }
    }

    return (
        <>
            <MyNavbar />
            <br></br>

            <div className="col-sm-6 offset-sm-3" style={{ backgroundColor: "#cff" }}>
                <br />
                <center > <h1>User Login</h1></center >
                <form>
                    <div className="form-group">
                        <label >Email address</label>
                        <input type="text" className='form-control' placeholder="Enter email" name="email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.?</small>
                    </div>
                    <br />
                    <div >
                        <label >Password</label>
                        <input type="password" className='form-control' placeholder="Password" name="password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" for="exampleCheck1">Stay Logged In</label>
                    </div>
                    <br />
                    <button className="btn btn-primary" onClick={login}>Login</button>
                </form>
                <br />
            </div>
        </>
    );
};

export default LoginUser