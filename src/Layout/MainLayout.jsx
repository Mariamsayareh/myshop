import React from 'react';
import Navbar from '../commponrnts/Navbar/Navbar.jsx';
import Footer from '../commponrnts/footer/Footer.jsx';
import {Outlet} from 'react-router-dom';
const MainLayout = () => {
    return (
        <>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </>
    );
}

export default MainLayout;
