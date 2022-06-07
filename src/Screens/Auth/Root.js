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
import ProtectedRoute from './Protected'

export default function Root() {
  return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>} />  
            <Route path="/signup" element={<Signup/>} />  
            <Route path="/home" element={<ProtectedRoute Component={<Main/>}/> } />  
            {/* <Route path="*" element={<Error/>} />   */}
        </Routes>
  )
}

