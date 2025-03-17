import React from 'react';
import { NavLink, useLoaderData, useParams } from 'react-router-dom';
import { FaRegStar } from "react-icons/fa";
import { FaRegStarHalf } from "react-icons/fa";
import ReactStars from 'react-stars';
import { IoCartOutline, IoStar, IoStarHalf } from 'react-icons/io5';
import { IoMdHeartEmpty } from 'react-icons/io';
import { addCardToLS, addWishListLS } from '../Utility/addToDb';




const CartDetails = () => {
    const { cardId } = useParams();

    const allData = useLoaderData();

    const cardDetails = allData.products.find(product => product.product_id === parseInt(cardId));

    const
        {
            product_id,
            product_title,
            product_image,
            price,
            description,
            rating,
            Specification,
            availability
        }
            = cardDetails;


    // here star working for add product to cart components  using localStore
    const handleAddToCard = (id) => {
        addCardToLS(id);
    }
    // here star working for add product to wishlist components  using localStore

    const handleAddToWishList = (id) => {
        addWishListLS(id)
        // console.log(id)
    }


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
            <div className='max-w-5xl mx-auto relative lg:pt-12'>

                <div className='flex w-full lg:absolute -bottom-58 bg-[#F7F7F7] rounded-3xl pb-24'>

                    <div className="hero bg-[#FFFFFF]  rounded-3xl">
                        <div className="hero-content flex-col lg:flex-row lg:p-20 lg:gap-8">
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
                                    : 'text-warning  border border-[#309c08] bg-[#309C081A] w-fit px-2 py-1 rounded-4xl'
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
                                <div className='flex items-center gap-4'>
                                    <div className='flex'>
                                        {
                                            [...Array(5)].map((_, index) => (
                                                <span key={index}>
                                                    {
                                                        index < Math.floor(rating)
                                                            ? (<IoStar className='text-xl text-yellow-400' />)
                                                            : index < rating
                                                                ? (<IoStarHalf className='text-xl text-yellow-400' />)
                                                                : ('')
                                                    }
                                                </span>
                                            ))
                                        }
                                    </div>

                                    {/* using react stars  */}
                                    {/* <div>
                                        <ReactStars
                                            count={5}
                                            value={rating}>

                                        </ReactStars>
                                    </div> */}
                                    <div>
                                        <h1 className=" text-sm font-normal bg-[#09080F0D] w-fit px-3.5 py-1.5 rounded-4xl">{rating}</h1>
                                    </div>

                                </div>


                                <div className='flex items-center gap-4 pt-2'>

                                    <NavLink>
                                        <button onClick={() => handleAddToCard(product_id)} className="flex  items-center gap-2 text-[#FFFFFF] text-lg font-bold bg-[#9538E2] px-6 py-3 rounded-4xl">Add To Card  <span><IoCartOutline className='text-xl' /></span></button>
                                    </NavLink>


                                    <div className='border border-[#0b0b0b1a] rounded-full w-fit  bg-white'>
                                        <NavLink>
                                            <button onClick={() => handleAddToWishList(product_id)} className="btn btn-ghost btn-circle">
                                                <div className="indicator">
                                                    < IoMdHeartEmpty className='text-xl' />
                                                </div>
                                            </button>
                                        </NavLink>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CartDetails;