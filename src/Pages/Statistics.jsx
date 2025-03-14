import React from 'react';
import { Outlet } from 'react-router-dom';
import ProductStatistics from '../Components/ProductStatistics';
import CartDetails from '../Components/CartDetails';


const Statistics = () => {
    return (
        <div className='bg-[#9538E2]'>
           
           <ProductStatistics></ProductStatistics>
          
        </div>
    );
};

export default Statistics;