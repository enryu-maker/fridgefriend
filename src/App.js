import React from 'react'

import HomeScreen from './Screens/Home/HomeScreen';
import Root from './Screens/Auth/Root';
import { useSelector } from 'react-redux';

export default function App() {
  const access = useSelector(state=>state.Reducers.access)
  console.log(access)
  return (
    <Root/>
  )
}
