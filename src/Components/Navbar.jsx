import React from 'react';
import { IoMdHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    const link = <>
        <div className='md:flex items-center gap-12 text-[#FFFFFF] text-base font-medium '>
            <NavLink><li>Home</li></NavLink>
            <NavLink><li>Statistics</li></NavLink>
            <NavLink><li>Dashboard</li></NavLink>
        </div>
    </>


    return (
        <div className='max-w-7xl mx-auto'>
            <div className="navbar bg-[#9538E2] rounded-4xl ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-amber-400 rounded-box z-1 mt-3 w-36  shadow">
                            {link}
                        </ul>
                    </div>
                    <a className="text-[#FFFFFF] text-xl font-bold">Gadget Heaven</a>
                </div>
                <div className="navbar-center hidden md:flex">
                    <ul className="menu menu-horizontal px-1">
                        {link}
                    </ul>
                </div>
                <div className="navbar-end space-x-3 ">
                    <div className='border border-[#0b0b0b1a] rounded-full  bg-[#FFFFFF]'>
                        <button className="btn btn-ghost btn-circle">
                            <IoCartOutline className='text-xl' />
                        </button>
                    </div>
                    <div className='border border-[#0b0b0b1a] rounded-full  bg-white'>
                        <button className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                < IoMdHeartEmpty className='text-xl' />
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;