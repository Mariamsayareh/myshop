import React from 'react';
import useAuthStore from './src/stor/authStore';
import { Navigate } from 'react-router-dom';
const ProtectedRouter = ({childern}) => {
    const token =useAuthStore(state=>state.token);
    if(!token){
       return <Navigate to='/log in'/>;
    }

    return childern;
    // return (
    //     <div>
    //         {token ? childern : null}
    //     </div>
    // );
}

export default ProtectedRouter;
