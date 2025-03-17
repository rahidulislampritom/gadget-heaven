import React from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import ProductStatistics from '../Components/ProductStatistics';


const Statistics = () => {

const allData =useLoaderData();

    return (
        <div className=''>

            <ProductStatistics allData={allData}></ProductStatistics>

        </div>
    );
};

export default Statistics;