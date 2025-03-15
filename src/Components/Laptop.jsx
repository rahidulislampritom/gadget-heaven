import React from 'react';
import { useLoaderData, useLocation } from 'react-router-dom';
import Product from './Product';





const Laptop = () => {


    const laptop = useLocation()
    console.log(laptop.pathname)

    const allProductData = useLoaderData();
    // console.log(allProductData.products);

    const laptopData = allProductData.products.filter(product => product.category === 'Laptop')
    // console.log(laptopData)



    return (
        <div className='text-center'>
            
            <div className='md:grid grid-cols-3 gap-6  bg-[#F7F7F7] p-6'>
                {
                    laptopData.map((aLaptop, idx) => <Product key={idx} card={aLaptop}></Product>)
                }
            </div>
        </div>
    );
};

export default Laptop;