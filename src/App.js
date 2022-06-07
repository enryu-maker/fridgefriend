import React from 'react'

import HomeScreen from './Screens/Home/HomeScreen';
import Root from './Screens/Auth/Root';
import { useDispatch, useSelector } from 'react-redux';
import { Init } from './Store/actions';
import Main from './Screens/Home/Main';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
export default function App() {
  const dispatch = useDispatch()
  // React.useEffect(()=>{
  //   dispatch(Init())
  // },[])
  const access = useSelector(state=>state.Reducers.access)

  console.log(access)
  return (
    <>
    <Router>
    {
      access?<HomeScreen/>:<Root/>
    }
    </Router>
    </>
  )
}

function Something() {
  return (
    <div>App</div>
  )
}

