
import React from 'react';

import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from './components/pages/Home';
import CrudApi from './components/pages/CrudApi';
import MyNavbar from './components/layout/MyNavbar';
import PostData from './components/pages/PostData';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import EditData from './components/pages/EditData';
import Regist from './components/pages/Regist';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoginUser from './components/pages/LoginUser';
import { Logout } from './components/pages/Logout';
import { useNavigate } from 'react-router-dom';
import Protected from './components/pages/Protected';
import MyState from './components/context/MyState';
import ErrPage from './components/pages/ErrPage';

import ResetPass from './components/pages/ResetPass';
import Assignment from "./components/pages/Assignment";

function App() {
const navigate = useNavigate()
  return (
    <>
    <Assignment/>
      <MyState>
        
        <br/>
        <ToastContainer/>
      <Routes>
        <Route path="/user/Registration" element={<Regist/>}/>
        <Route path="/login" element={<LoginUser/>} />
       
        
        <Route  exact path="/"  element={<Home/>} />
        <Route   path="/users/show" element={<CrudApi/>} />
        <Route path="/user/edit/:id" element={<EditData/>} />
        <Route path="/home" element={<Home/>} />
        <Route  exact path="/logout"  element={<Logout/>} />
        <Route path="*"  element={<ErrPage/>} />
        <Route path = "/forgot" element={<ResetPass /> }/>
        
      </Routes>
      
      <div className="App">          
   </div>
   </MyState>

   </>
  );
}

export default App;
