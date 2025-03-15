import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const CartDetails = () => {
    const { cardId } = useParams();

    const allData = useLoaderData();

    const cardDetails = allData.products.find(product => product.product_id === parseInt(cardId));

    const
        {
            product_title,
            product_image,
            price,
            description,
            rating,
            Specification
        }
            = cardDetails


    return (
        <div className='bg-[#F7F7F7] lg:pb-56'>

            <div className='lg:mb-60 mt-6 md:mt-0'>

                <div className='bg-[#9538E2] text-center space-y-4 p-8 pb-0 md:pb-60'>
                    <h2 className='text-[white] text-2xl md:text-3xl font-bold'>Product Details</h2>
                    <p className='md:max-w-[796px] mx-auto text-[white] font-normal '>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                </div>

            </div>
            <div className=''>

            </div>
            <div className='max-w-5xl mx-auto relative'>

                <div className='flex w-full lg:absolute -bottom-28 border'>

                    <div className="hero bg-base-200 ">
                        <div className="hero-content flex-col lg:flex-row  border lg:p-20 ">
                            <div className='flex-1'>
                                <img
                                    src={product_image}
                                    className="rounded-lg shadow-2xl h-3/4" />
                            </div>
                            <div className='flex-2 md:space-y-2'>
                                <h1 className="md:text-xl font-bold">{product_title}</h1>
                                <h1 className="md:text-xl font-normal">{price}</h1>
                                <h1 className="md:text-xl font-normal">{description}</h1>

                                <h1 className="text-xl font-normal">{rating}</h1>

                                <div className='space-y-2'>
                                    {
                                        Specification.map(d => <h2>{d}</h2>)
                                    }
                                </div>
                                <button className="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CartDetails;