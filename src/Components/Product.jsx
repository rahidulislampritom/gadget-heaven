import React from 'react';
import { NavLink } from 'react-router-dom';

const Product = ({ card }) => {
    const { product_id, product_image, product_title, price } = card
    // console.log(card)
    return (
        <div>

            <div className='p-6 mb-8 shadow-2xl rounded-xl space-y-3 border border-[#D9D9D9]'>
                <div className='bg-[#D9D9D9] border border-[#D9D9D9]'>
                    <img className='rounded-3xl' src={product_image} alt="" />
                </div>
                <div className='text-left space-y-3'>
                    <h2 className='text-xl font-semibold'>{product_title}</h2>
                    <h2 className='text-[#09080F99] text-lg font-medium'><span className='text-black text-xl font-medium'>Price :</span> {price}K </h2>

                </div>

                <div className='text-left'>
                    <NavLink to={`/cartDetails/${product_id}`}>
                        <button className='text-[#9538E2] text-lg font-semibold border border-[#9538E2 px-5 py-3 rounded-4xl'>View Details</button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Product;