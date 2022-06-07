import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Route, Navigate } from 'react-router-dom'

const ProtectedRoute = ({ Component}) => {
    const access = useSelector(state=>state.Reducers.access)
        console.log(access)
      return access != null? <Component /> : <Navigate to='/login'/>
}
export default ProtectedRoute

