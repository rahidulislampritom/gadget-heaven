import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Cart from './Cart';
import Wishlist from './Wishlist';

const BtnDashboard = () => {

    const [activeComponent, setActiveComponent] = useState('cart')
    return (
        <div>
            <div className='bg-[#9538E2] text-center space-y-4 p-8 mt-6 md:mt-0'>
                <h2 className='text-[white] text-2xl md:text-3xl font-bold'>Product Details</h2>
                <p className='md:w-[796px] mx-auto text-[white] font-normal  '>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>



                <div className='md:flex items-center justify-center  gap-6 space-y-3 md:space-y-0'>
                    <div>
                        <button
                            onClick={() => setActiveComponent('cart')} className={`
                            ${activeComponent === 'cart'
                                    ? 'text-[#9538E2] text-lg font-medium border  rounded-4xl px-16 py-3.5 bg-[#FFFFFF]'
                                    : 'text-[#FFFFFF] text-lg font-medium  border rounded-4xl   px-16 py-3.5'
                                }`}>
                            Cart
                        </button>
                    </div>
                    <div>
                        <button
                            onClick={() => setActiveComponent('wishlist')} className={`${activeComponent === 'wishlist'
                                ? 'text-[#9538E2] text-lg font-medium border  rounded-4xl px-16 py-3.5 bg-[#FFFFFF]'
                                : 'text-[#FFFFFF] text-lg font-medium  border rounded-4xl   px-16 py-3.5'
                                }`}>
                            WishList
                        </button>
                    </div>
                </div>
            </div>
            <div>
                {
                    activeComponent === 'cart'
                        ? <Cart></Cart>
                        : <Wishlist></Wishlist>
                }
            </div>
        </div>
    );
};

export default BtnDashboard;