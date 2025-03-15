import React from 'react';
import { useLoaderData, useLocation } from 'react-router-dom';
import Product from './Product';



const SmartWatch = () => {
    const smartWatch = useLocation()
    console.log(smartWatch.pathname)

    const allProductData = useLoaderData();
    const smartWatchData = allProductData.products.filter(product => product.category === 'Smartwatch');
    const accessoriesData = smartWatchData.filter(product => product.category === 'Smartwatch');
    // console.log(accessoriesData);
    // console.log(allProductData.products);
    return (
        <div>
            <div className='text-center'>
                <div className='md:grid grid-cols-3 gap-6  bg-[#F7F7F7] p-6'>
                    {
                        accessoriesData.map((accessories, idx) => <Product key={idx} card={accessories}></Product>)
                    }
                </div>
            </div>
        </div>
    );
};

export default SmartWatch;