import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../store/auth';
import { toast } from 'react-toastify';

function Logout() {
    const { LogoutUser } = useAuth();

    useEffect(() => {
        LogoutUser();
        toast.success("Logout Successful!");
    }, []); 

    return (
        <Navigate to="/" />
    );
}

export default Logout;
