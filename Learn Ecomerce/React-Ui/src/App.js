
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { useNavigate } from 'react-router-dom';
import Assignment from "./components/pages/Assignment";
import { ProductViewDetails } from './components/pages/ProductViewDetails';

function App() {
const navigate = useNavigate()
  return (
    <>
    <Routes>
        <Route path="/" element={<Assignment/>}/>
        <Route path="/getProId/:id" element={<ProductViewDetails/>}/>
      </Routes>
   </>
  );
}

export default App;