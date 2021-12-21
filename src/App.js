
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
import Protected from './components/pages/Protected';
import {myNewContxt} from './components/context/MyNewContxt';
// import {LogContext} from "./components/context/LogContext";

function App() {
  return (
    <>
  
      <h1> Welcome</h1>
      <myNewContxt>
        <ToastContainer/>
        
     {/* <MyNavbar/> */}
      <Routes>
        <Route path="/user/Registration" element={<Regist/>}/>
        <Route path="/login" element={<LoginUser/>} />
       
        
        <Route  exact path="/"  element={<Home/>} />

        <Route   path="/users/show" element={<CrudApi/>} />
        <Route path="/user/edit/:id" element={<EditData/>} />
        <Route path="/home" element={<Home/>} />
        <Route  exact path="/logout"  element={<Logout/>} />

        {/* <Route redirect  to="/crudapi" /> */}

        <Route   element={<Error/>}/>
      </Routes>
      
     
      
      <div className="App">      
   {/* <CrudApi /> */}
    
   </div>
   </myNewContxt>
   </>
  );
}

export default App;
