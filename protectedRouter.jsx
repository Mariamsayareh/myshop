import React from 'react';
import useAuthStore from './src/stor/authStore';
import { Navigate } from 'react-router-dom';
const ProtectedRouter = ({children}) => {
    const token =useAuthStore(state=>state.token);
    if(!token){
       return <Navigate to='/log in'/>;
    }
    return children;
    
}

export default ProtectedRouter;
