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
            Specification,
            availability
        }
            = cardDetails

    console.log(cardDetails)
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

                <div className='flex w-full lg:absolute -bottom-42 bg-[#F7F7F7] rounded-3xl'>

                    <div className="hero bg-[#FFFFFF]  rounded-3xl">
                        <div className="hero-content flex-col lg:flex-row lg:p-20 ">
                            <div className='w-1/2' >
                                <img
                                    src={product_image}
                                    className="rounded-lg shadow-2xl h-3/4" />
                            </div>
                            <div className=' md:space-y-2'>
                                <h1 className="md:text-xl font-bold">{product_title}</h1>
                                <h1 className="md:text-xl font-normal">
                                    <span className='text-[20px] font-semibold'>Price: </span>
                                    ${price}
                                </h1>
                                <div className={`${availability === true
                                    ? 'text-[#309C08]  border border-[#309c08] bg-[#309C081A] w-fit px-2 py-1 rounded-4xl'
                                    : 'text-red-900  border border-red-500 bg-red-300 w-fit px-2 py-1 rounded-4xl'
                                    }`}>
                                    {
                                        availability === true
                                            ? 'In Stock'
                                            : 'Out of Stock'
                                    }
                                </div>
                                <h1 className="text-[#09080F99] md:text-xl font-normal">{description}</h1>
                                <div className='space-y-2'>
                                    <h2 className='text-[#09080F] text-lg font-bold'>Specification:</h2>
                                    <ol className='list-decimal pl-5'>
                                        {
                                            Specification.map((d, idx) => <li key={idx} className='text-[#09080F99] text-lg font-normal'>{d}</li>)
                                        }
                                    </ol>
                                </div>
                                <h2 className='text-[#09080F] text-lg font-bold'>Rating</h2>
                                <div>
                                    <div>

                                    </div>
                                    <h1 className=" text-sm font-normal bg-[#09080F0D] w-fit px-3.5 py-1.5 rounded-4xl">{rating}</h1>
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