import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Cart from './Cart';
import Wishlist from './Wishlist';
import { getCardListFromLS, getStoredWishListData } from '../Utility/addToDb';

const BtnDashboard = ({ allCardData }) => {


    const allData = allCardData.products

    const [activeComponent, setActiveComponent] = useState('cart')


    // here start working for show the data in card 

    const [cardList, setCardList] = useState([]);

    useEffect(() => {
        const storedCardList = getCardListFromLS();
        const storedCardListInteger = storedCardList.map(id => parseInt(id))
        const addedCardList = allData.filter(card => storedCardListInteger.includes(card.product_id));
        setCardList(addedCardList);

    }, [allData])

    // here start ends for show the data in card 


    // here start working for show the data in wishlist
    const [wishList, setWishList] = useState([]);
    // console.log(wishList);
    useEffect(() => {
        const storedWishListData = getStoredWishListData();
        const storedWishListDataInt = storedWishListData.map(id => parseInt(id));
        const wishListData = allData.filter(card => storedWishListDataInt.includes(card.product_id));
        setWishList(wishListData);
    }, [allData])

    // here end working for show the data in wishlist 



    return (
        <div>
            <div className='bg-[#9538E2] text-center space-y-4 p-8 mt-6 md:mt-0'>
                <h2 className='text-[white] text-2xl md:text-3xl font-bold'>Product Details</h2>
                <p className='md:w-[796px] mx-auto text-[white] font-normal  '>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>



                <div className='md:flex items-center justify-center  gap-6 space-y-3 md:space-y-0'>
                    <div>
                        <button
                            onClick={() => setActiveComponent('cart')} className={`
                            ${activeComponent === 'cart'
                                    ? 'text-[#9538E2] text-lg font-medium border  rounded-4xl px-16 py-3.5 bg-[#FFFFFF]'
                                    : 'text-[#FFFFFF] text-lg font-medium  border rounded-4xl   px-16 py-3.5'
                                }`}>
                            Cart
                        </button>
                    </div>
                    <div>
                        <button
                            onClick={() => setActiveComponent('wishlist')} className={`${activeComponent === 'wishlist'
                                ? 'text-[#9538E2] text-lg font-medium border  rounded-4xl px-16 py-3.5 bg-[#FFFFFF]'
                                : 'text-[#FFFFFF] text-lg font-medium  border rounded-4xl   px-16 py-3.5'
                                }`}>
                            WishList
                        </button>
                    </div>
                </div>
            </div>
            <div className=' bg-[#1e1e1e0f] pb-72'>
                {
                    activeComponent === 'cart'
                        ? <Cart cardList={cardList}></Cart>
                        : <Wishlist wishList={wishList}></Wishlist>
                }
            </div>
        </div>
    );
};

export default BtnDashboard;