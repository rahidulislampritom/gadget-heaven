import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
            <div className='max-w-[1540px] mx-auto text-center bg-[#9538E2]  border-8 border-b-0 border-[#F6F6F6] rounded-4xl rounded-b-none'>
                <Navbar></Navbar>
            </div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;