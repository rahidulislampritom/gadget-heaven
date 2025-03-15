import React from 'react';
import Navbar from './Navbar';

const Banner = ({ heading, info, }) => {

    return (
        <div >
            <div className='space-y-4 md:space-y-0 pt-3 md:pt-0'>
                <h2 className='md:max-w-[1120px] mx-auto text-[#FFFFFF] text-3xl md:text-[56px] pb-0 md:pb-6'>{heading}</h2>

                <p className='md:max-w-[796px] mx-auto text-[#FFFFFF] text-base pb-0 md:pb-8'>{info}</p>

                <div className='pb-10 md:pb-64'>
                    <button className='text-[#9538E2] text-xl font-bold bg-white px-8 py-4 rounded-4xl'>Shop Now</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;