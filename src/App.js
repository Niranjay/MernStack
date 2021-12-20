
import React from 'react';
// import ReactDOM from 'react-dom';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from './components/pages/Home';
import CrudApi from './components/pages/CrudApi';
import MyNavbar from './components/layout/MyNavbar';
// import { Route,Routes} from "react-router-dom"
import Error from './components/pages/Error';
import PostData from './components/pages/PostData';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import EditData from './components/pages/EditData';
import Regist from './components/pages/Regist';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoginUser from './components/pages/LoginUser';
import { Logout } from './components/pages/Logout';
// import {LogContext} from "./components/context/LogContext";

function App() {
  return (
    <>
  
      <h1> Welcome</h1>
      <ToastContainer/>
     {/* <MyNavbar/> */}

     {/* <LogContext> */}
         
      <Routes>
        <Route path="/user/Registration" element={<Regist/>}/>
        <Route path="/login" element={<LoginUser/>} />
       
        
        <Route  exact path="/"  element={<Home/>} />
        {
          localStorage.
        }
        <Route   path="/users/show" element={<CrudApi/>} />
        <Route path="/user/edit/:id" element={<EditData/>} />
        <Route path="/home" element={<Home/>} />
        <Route  exact path="/logout"  element={<Logout/>} />
        
    

        {/* <Route redirect  to="/crudapi" /> */}
        

        <Route   element={<Error/>}/>
      </Routes>

      {/* </LogContext> */}
     
     {/* <Home/> */}
      <div className="App">      
   {/* <CrudApi /> */}
   </div>
   </>
  );
}

export default App;
