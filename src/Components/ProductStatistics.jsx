import React from 'react';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const ProductStatistics = ({ allData }) => {

    return (
        <div className=' mt-6 md:mt-0 bg-[#1e1e1e0f] pb-16 lg:pb-32'>

            <div>
                <div className='bg-[#9538E2] text-center space-y-4 p-8 pb-0 md:pb-8'>
                    <h2 className='text-[white] text-2xl md:text-3xl font-bold'>Product Details</h2>
                    <p className='md:w-[796px] mx-auto text-[white] font-normal '>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                </div>
            </div>

            <div>
                <div className='lg:max-w-7xl mx-auto lg:p-2 pt-6 lg:pt-12 text-2xl font-bold'>
                    <h2>Statistics</h2>
                </div>

                <div className='lg:max-w-7xl mx-auto bg-[#FFFFFF] rounded-2xl lg:p-4 mt-4 lg:mt-8'>
                    <ResponsiveContainer width='100%' height={400}>
                        <BarChart
                            data={allData.products}
                            width={500}
                            height={300}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                            barSize={20}
                        >
                            <XAxis className='text-sm text-[#0B0B0BB3]' dataKey={'product_title'} scale='point' padding={{ left: 32, right: 10 }}></XAxis>
                            <YAxis dataKey={"price"}></YAxis>
                            <Bar dataKey={"price"} fill='#9538E2'></Bar>
                            <Tooltip></Tooltip>
                            <Legend></Legend>

                        </BarChart>
                    </ResponsiveContainer>
                </div>

            </div>
        </div>
    );
};

export default ProductStatistics;