import logo from './logo.svg';
import './App.css';
import Football  from './Football';
import axios from 'axios';
import React,{useState,useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";

import Home from './Home'

import NavbarFrom from './Navbar';
import Tennis from './Tennis';
import NBA from './NBA';
import NFL from './NFL';
import F1 from './F1';
import Cricket from './Cricket';
  
function App() {
  return (
    <>
    <NavbarFrom/>
    <Routes>
          {/* <Navbar.Brand to="home">Home</Navbar.Brand> */}

          <Route  path="/" element={<Home />} />
          <Route  path="/football" element={<Football />} />
          <Route  path="/tennis" element={<Tennis />} />
          <Route  path="/nba" element={<NBA />} />
          <Route  path="/nfl" element={<NFL />} />
          <Route  path="/f1" element={<F1 />} />
          <Route  path="/cricket" element={<Cricket />} />

          </Routes>
    {/* <Football/> */}
    </>
  );
}

export default App;
