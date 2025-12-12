import React from 'react';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
    return (
        <>
            <Outlet/>
            <div className='footer'>
                <h2>this is footer</h2>
            </div>
        </>
    );
}

export default AuthLayout;
