import React from 'react'
import {  useState, useEffect}  from 'react';
// import PostData from './PostData';
import EditData from './EditData';
import {Link, useHisoty, useParams} from "react-router-dom"
import PostData from './PostData';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MyNavbar from '../layout/MyNavbar';

const CrudApi = () => {
    const [show, setShow]=useState(false)
    const[ename, setEname]=useState("")
    const[eage, setEage]=useState("")
    const[ehobby, setEhobby]=useState("")
    const[gender, setGender]=useState("")
    const[email, setEmail]=useState("")
    const[password, setPassword]=useState("")

    const [data, setData]= useState([]);

    useEffect(() => {
        if(localStorage){
  getlist()}
}, []);

function getlist()
{
    fetch("http://localhost:5000/getstu").then((response) => {response.json().then((resp)=>
    {
        setData(resp)
        setEname(resp[0].name)
        setEage(resp[0].age)
        setEhobby(resp[0].hobby)
        setGender(resp[0].gender)
        setEmail(resp[0].email)
        setPassword(resp[0].password)
})
})

}

// Creat for pre-field form for Update operation
    function selUser(i){
        console.log(i);
    }

    function deluser(id)
    {
        fetch(`http://localhost:5000/delstu/${id}`, {method:'delete'})
            .then((res)=>{res.json().then((resp)=>{
                // console.warn(resp);
                getlist()
                toast.success("Record Deleted...",
                {
                    position:"top-center"
                });
            })})
    }
    return (
        <div className="container">
           <MyNavbar/>
            <center>
                <br/>
            <h1> New Database List </h1>
            
            <hr/>
            
            {/* <button className="button" >More</button> */}
            <br/>
            <br/> 
            <Link className="btn btn-outline-primary" to="/user/Registration" >New Registration</Link>
            <br/>
            
            <br/>
            </center>

            <table border="1" className="table">
                <tr >
                    <td>ID</td>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Password</td>
                    <td>Age</td>
                    <td>Hobby</td>
                    <td>Gender</td>
                    <td>Action</td>
                    
                </tr>
                {
                    data.slice(0).reverse().map((item, i) =>
                    < tr >
                    <td>{i+1}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.password}</td>
                    <td>{item.age}</td>
                    <td>{item.hobby}</td>
                    <td>{item.gender}</td>
                    <td>
                        <Link className='btn btn-outline-primary' to ={`/user/edit/${item._id}`}>Edit</Link>
                    </td>
                    {/* <button onClick={e=>(this.props.selUser(item._id))}>editme</button> */}
                    
                    
                    {/* Delete button woking */}
                    <td><button className="button" onClick={()=>{{
                            const confBox=window.confirm("Are You Sure to Delete - "+item.name)
                            if(confBox===true){deluser(item._id)}
                        }}}>Delete</button></td>
                    </tr>)
                } 
            </table>     
            <ToastContainer/>
        </div>
    );
}
export default CrudApi