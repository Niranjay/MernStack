import {useContext, useState, React, useEffect }from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MyNavbar from '../layout/MyNavbar';
import GlobaContxt from '../context/GlobalContxt';
import ReactPlayer from 'react-player';

function Home (){

    const a = useContext(GlobaContxt)
     const [lname, setLname] = useState("") 
     const [vUrl, setVurl] = useState("")
     const navigate = useNavigate()

    useEffect(()=>{
        if (localStorage.getItem("myData")) {
            const comment = JSON.parse(localStorage.getItem('myData'));
             setLname(comment.name) 
             console.log("MyNewuserName:",lname);
        }
        else{
            setLname("")
        navigate("/login")
        }
    })
    
    // function PlayVedio(){
    //     <ReactPlayer url= {vUrl}/>
    // }
    // const ldata= localStorage.getItem("myData")
    // const comment = JSON.parse(localStorage.getItem('myData'));

    return (
        <>
        <MyNavbar/>
        <br></br>
        
            <div className="container" style={ {backgroundColor:"#cff", alignContent: "center"}}>
                <h1>Welcome {lname} , this is home page</h1>
                <p>Want to see Vedio, paste vedio Link</p>
                <div  className='container-fluid' center>
                <input className='' type="Text" name='vUrl' value={vUrl} placeholder='Enter Vedio Link/URL to play this' onChange={(e) => { setVurl(e.target.value) }}  />
                {/* <button className='btn btn-primary' >Go</button> */}
                <br/><br/><br/><br/>

                <ReactPlayer controls  url= {vUrl}/><br/><br/>
                </div>

                </div>               
        </>
    );
};
export default Home
