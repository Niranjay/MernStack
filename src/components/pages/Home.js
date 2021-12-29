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
     const currDate = new Date().toLocaleDateString();
     let currTime = new Date().toLocaleTimeString();
     const [cTime, setCtime ]= useState("currTime"); 

     useEffect(()=>{
        if (localStorage.getItem("myData")) {
            const comment = JSON.parse(localStorage.getItem('myData'));
             setLname(comment.name) 
            //  console.log("MyNewuserName:",lname);
            }
            else{
                setLname("")
                navigate("/login")
            }
        })
     
        const UpdatTime = () => {
            currTime = new Date().toTimeString();
            // var time = today.getHours() + "--" + today.getMinutes() + ":" + today.getSeconds();
            setCtime(currTime);
            var today = new Date();
            // var hrs = today.currTime()
            // console.log(hrs);
        }
        setInterval(UpdatTime, 1000)
    
        // function clicMe(){
    //     setCtime(new Date().toLocaleTimeString())
    // }


    return (
        <>
        <MyNavbar/>
        <br></br>
        
            <div className="container" style={ {backgroundColor:"#cff", alignContent: "center"}}>
                <center>
                < h3 style={{textAlign: 'right'}}>{currDate}</h3>
                <h1>Welcome To The Home Page Mr. {lname}</h1>
                <div  className='container-fluid' >
                

                < h2 style={{textAlign: 'center'}}>{cTime}</h2><br/>
                <p>Paste URL to show Vedio: 
                <input className='' type="Text" name='vUrl' value={vUrl} placeholder='Enter Vedio Link/URL to play this' onChange={(e) => { setVurl(e.target.value) }}  />
                {/* <button className='btn btn-primary' onClick={clicMe}>Go</button> */}
                <br/><br/><br/><br/></p>
                <ReactPlayer controls  url= {vUrl}/><br/><br/>
                </div>
                </center>
                </div>               
        </>
    );
};
export default Home
