import React from 'react';

const BtnDashboard = () => {
    return (
        <div>
            <div className='bg-[#9538E2] text-center space-y-4 p-8 mt-6 md:mt-0'>
                <h2 className='text-[white] text-2xl md:text-3xl font-bold'>Product Details</h2>
                <p className='md:w-[796px] mx-auto text-[white] font-normal  '>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>

                <div className='md:flex items-center justify-center  gap-6 space-y-3 md:space-y-0'>
                    <div className='border border-[#FFFFFF] bg-white max-w-min mx-auto md:mx-0 px-16 py-3  rounded-4xl'>
                        <button className='text-[#9538E2] text-lg font-extrabold'>Cart</button>
                    </div>
                    <div className='border border-[#FFFFFF] max-w-min mx-auto md:mx-0 px-16 py-3 rounded-4xl'>
                        <button className='text-[#FFFFFF] text-lg font-extrabold'>Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BtnDashboard;