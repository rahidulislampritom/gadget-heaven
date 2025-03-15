import React from 'react';
import Banner from '../Components/Banner';
import Hero from '../Components/Hero';
import { NavLink, Outlet, useLoaderData } from 'react-router-dom';

const Home = () => {

    const allData = useLoaderData();
    // const { category } = allData.products;
    return (
        <div className=''>
            <div className='w-full md:max-w-[1540px] mx-auto text-center  bg-[#9538E2] border-8 border-t-0 border-[#F6F6F6] rounded-4xl rounded-t-none '>

                <Banner heading='Upgrade Your Tech Accessorize with Gadget Heaven Accessories' info='Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!' />

            </div>

            <div className='lg:max-w-[1062px] text-center mx-auto'>
                <Hero></Hero>
            </div>
            {/* category dynamic  button and outlet start  */}
            <div className='md:text-center md:max-w-7xl mx-auto bg-[#F7F7F7]  p-3 md:p-6 border '>

                <div className='lg:flex gap-6'>
                    <div className='flex flex-col gap-3 bg-white h-fit p-3 rounded-2xl'>


                        <NavLink to={'/'}
                            className={({ isActive }) => isActive
                                ? 'text-[#F7F7F7] text-lg font-medium px-7 py-3.5 bg-[#9538E2] rounded-4xl text-left'
                                : 'w-full text-[#09080F99] text-lg font-medium px-7 py-3.5 bg-[#F7F7F7] rounded-4xl text-left'}><button >All Product</button></NavLink>


                        {
                            [...new Set(allData.products.map((data) => data.category))].map((category, idx) =>
                                <NavLink to={`${category}`}
                                    className={({ isActive }) => isActive
                                        ? 'text-[#F7F7F7] text-lg font-medium px-7 py-3.5 bg-[#9538E2] rounded-4xl text-left'
                                        : 'w-full text-[#09080F99] text-lg font-medium px-7 py-3.5 bg-[#F7F7F7] rounded-4xl text-left'}><button key={idx}>{category}</button></NavLink>)
                        }

                    </div>


                    <div className='lg:min-w-10/12'>
                        <Outlet></Outlet>
                    </div>
                </div>

            </div>
            {/* category dynamic  button and outlet end  */}



        </div>
    );
};

export default Home;