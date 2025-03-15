import React from 'react';
import { NavLink, useLoaderData } from 'react-router-dom';
import Product from './Product';


const AllProducts = () => {
    // all products data fetch here by use loader 
    const allData = useLoaderData()
    // console.log(allData.products)
    return (
        <div className=' text-center md:max-w-7xl mx-auto  pt-12 lg:pt-0 p-3 lg:p-6'>



            <div className='md:flex gap-6'>
              

                <div className='md:grid grid-cols-3 gap-6'>
                    {
                        allData.products.map((card, idx) => <Product key={idx} card={card}></Product>)
                    }
                </div>
            </div>




        </div>
    );
};

export default AllProducts;