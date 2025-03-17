import React from 'react';
import BtnDashboard from '../Components/BtnDashboard';
import { useLoaderData } from 'react-router-dom';

const Dashboard = () => {
    const allCardData = useLoaderData();
    // console.log(allCardData)
    return (
        <div>
            <BtnDashboard allCardData={allCardData}></BtnDashboard>
        </div>
    );
};

export default Dashboard; 