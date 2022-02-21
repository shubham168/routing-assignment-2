import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext'

export const Protect = () => {
    const {isAuth} = useContext(AuthContext);

  return (
      isAuth ? <Outlet /> : <Navigate to="/"  replace />
    
  )
}
