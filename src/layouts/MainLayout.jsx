import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Outlet, useLocation } from 'react-router-dom';



const MainLayout = () => {

    const locationNav = useLocation()

    return (
        <div>
            <div className={locationNav.pathname === '/' || locationNav.pathname === '/Laptop' || locationNav.pathname === '/Phone' || locationNav.pathname === '/Accessories' || locationNav.pathname==='/Smartwatch'
                ? 'max-w-[1540px] mx-auto text-center bg-[#9538E2]  border-8 border-b-0 border-[#F6F6F6] rounded-4xl rounded-b-none'
                : 'max-w-[1540px] mx-auto text-center bg-white border-8 border-b-0 border-white   rounded-4xl rounded-b-none'}>
                <Navbar></Navbar>
            </div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;