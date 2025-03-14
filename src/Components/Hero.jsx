import React from 'react';
import img from '../../src/assets/banner.jpg';

const Hero = () => {
    return (
        <div className='relative'>
            <div className=' md:h-[563px] w-full  border-2 border-[#FFFFFF] rounded-4xl -top-18  md:-top-48  md:left-0 absolute p-2 md:p-6 md:bg-[#FFFFFF4D] bg-white '>
                <img className='size-full  rounded-3xl   object-cover' src={img} alt="" />
            </div>
        </div>
    );
};

export default Hero;