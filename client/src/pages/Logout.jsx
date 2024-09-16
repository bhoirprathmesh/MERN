import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom';
import { useAuth } from '../store/auth';

function Logout() {

    const { LogoutUser } = useAuth();

    useEffect( () => {
        LogoutUser();
    }, [Logout])

  return (
    <Navigate to="/login" />
  )
}

export default Logout
