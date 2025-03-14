import React from 'react';
import Banner from '../Components/Banner';
import Hero from '../Components/Hero';

const Home = () => {
    return (
        <div>
            <div className='w-full md:max-w-[1540px] mx-auto text-center   bg-[#9538E2] border-8 border-t-0 border-[#F6F6F6] rounded-4xl rounded-t-none'>

                <Banner heading='Upgrade Your Tech Accessorize with Gadget Heaven Accessories' info='Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!' />

            </div>

            <div className='lg:max-w-[1062px] text-center mx-auto '>
                <Hero></Hero>
            </div>
        </div>
    );
};

export default Home;