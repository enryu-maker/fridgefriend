import React from 'react'

import Login from './Screens/Auth/Login';
import Signup from './Screens/Auth/Signup';
import Main from './Screens/Home/Main';
import Home from './Screens/Auth/Home';
import { useDispatch, useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import ProtectedRoute from './Screens/Auth/Protected';
import Error from './Screens/ErrorPage/Error';
import { Init } from './Store/actions';
export default function App() {
  const access = useSelector(state=>state.Reducers.access)
  return (
    <>
    <Router>
    <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>} />  
            <Route path="/signup" element={<Signup/>} />  
            <Route path="/home" element={<ProtectedRoute Component={Main} access={access}/>} />  
            <Route path="*" element={<Error/>} />  
        </Routes>
    </Router>
    </>
  )
}


