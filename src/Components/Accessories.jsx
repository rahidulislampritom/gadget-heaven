import React from 'react';
import { useLoaderData, useLocation } from 'react-router-dom';
import Product from './Product';

const Accessories = () => {


    const accessories = useLocation()
    console.log(accessories.pathname)

    const allProductData = useLoaderData();
    console.log(allProductData.products);

    const accessoriesData = allProductData.products.filter(product => product.category === 'Accessories')
    console.log(accessoriesData)
    return (
        <div>
            <div className='text-center'>

                <div className='md:grid grid-cols-3 gap-6  bg-[#F7F7F7] p-6'>
                    {
                        accessoriesData.map((aAccessoriesData, idx) => <Product key={idx} card={aAccessoriesData}></Product>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Accessories;