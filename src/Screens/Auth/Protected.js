import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ Component, access}) => {
  console.log(access)
      return( 
        <>
        {access === null? <Navigate to='/login'/> : <Component /> }
        </>
      )
}
export default ProtectedRoute

