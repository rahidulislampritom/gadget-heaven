import React from 'react';
import { useLoaderData, useLocation } from 'react-router-dom';
import Product from './Product';

const Phone = () => {

    const phone = useLocation()
    console.log(phone.pathname)

    const allProductData = useLoaderData();
    // console.log(allProductData.products);

    const phoneData = allProductData.products.filter(product => product.category === 'Phone')
    // console.log(phoneData)
    return (
        <div>
            <h2>phone</h2>
            <div className='text-center'>

                <div className='md:grid grid-cols-3 gap-6  bg-[#F7F7F7] p-6'>
                    {
                        phoneData.map((aPhone, idx) => <Product key={idx} card={aPhone}></Product>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Phone;