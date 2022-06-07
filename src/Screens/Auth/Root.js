import React from 'react'
import Home from './Home'
import Login from './Login'
import Signup from './Signup'
import Main from '../Home/Main'
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";
import Error from '../ErrorPage/Error';

export default function Root() {
  return (
    <Router>
        <Routes>
            <Route exact path="/" element={<Home/>} />  
            <Route path="/Login" element={<Login/>} />  
            <Route path="/Signup" element={<Signup/>} />  
            {/* <Route path="/Home" element={<Main/>} />   */}
            {/* <Route path="*" element={<Error/>} />   */}
        </Routes>
    </Router>
  )
}

