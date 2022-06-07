import React from 'react'
import Main from './Main'
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";
import Error from '../ErrorPage/Error';
export default function HomeScreen() {
  return (
    <Router>
    <Routes>
        <Route exact path="/" element={<Main/>} />  
        <Route path="*" element={<Error/>} />  
    </Routes>
</Router>

  )
}
