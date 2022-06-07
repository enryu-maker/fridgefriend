import React from 'react'
import Main from './Main'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
  } from "react-router-dom";
import Error from '../ErrorPage/Error';
export default function HomeScreen() {
  return (
    <Routes>  
        <Route exact path="/home" element={<Main/>}/> 
        {/* <Route path="*" element={<Error/>} />   */}
    </Routes>
  )
}
