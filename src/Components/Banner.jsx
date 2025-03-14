import React from 'react';
import Navbar from './Navbar';

const Banner = ({ heading, info,}) => {
    return (
        <div >
            <div className=''>
                <h2 className='w-full md:max-w-[1120px] mx-auto text-[#FFFFFF] text-[36px] md:text-[56px] pb-0 md:pb-6'>{heading}</h2>
                <p className='w-full md:max-w-[796px] mx-auto text-[#FFFFFF] text-base pb-0 md:pb-8'>{info}</p>
                <div className='pb-28 md:pb-64'>
                    <button className='text-[#9538E2] text-xl font-bold bg-white px-8 py-4 rounded-4xl'>Shop Now</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;