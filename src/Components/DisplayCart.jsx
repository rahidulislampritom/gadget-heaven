import React from 'react';
import { RxCrossCircled } from 'react-icons/rx';
import { TiDeleteOutline } from 'react-icons/ti';

const DisplayCart = ({ card }) => {


    const {
        product_title,
        product_image,
        price,
        description,
    } = card;

    return (
        <div className='mb-6 p-3 md:p-0 max-w-7xl mx-auto'>
            <div className="hero bg-[#FFFFFF] flex justify-between md:p-8 rounded-2xl">
                <div className="md:flex items-center gap-8">
                    <div className='md:max-w-1/8  p-10 md:p-0 rounded-2xl'>
                        <img src={product_image} />
                    </div>
                    <div >
                        <h1 className="text-[#09080F] text-2xl font-semibold">{product_title}</h1>
                        <p className="text-[#09080F99] text-lg font-normal py-4">
                            {description}
                        </p>
                        <h2 className='text-lg font-semibold'><span className='text-2xl font-bold'>Price: </span> $ {price}</h2>
                    </div>
                </div>
                <div className='md:pb-20 md:pr-16 relative'>
                    <button className='text-red-500 text-4xl '><RxCrossCircled className='absolute md:static -left-7 -top-56' /></button>
                </div>
            </div>
        </div>
    );
};

export default DisplayCart;