import React from 'react';
import CartDetails from './ProductDetails';
import DisplayCart from './DisplayCart';

const Cart = ({ cardList}) => {

    return (
        <div>
            <div className='pt-6 md:pt-12'>
                <h2 className='mb-3 md:mb-8 text-[#0B0B0B] text-2xl font-bold max-w-7xl mx-auto p-2'>Cart</h2>
                {
                    cardList.map((card, idx) => <DisplayCart key={idx} card={card}></DisplayCart>)
                }
            </div>
            {/* <div>
                {
                    wishList.map((card, idx) => <DisplayCart key={idx} card={card}></DisplayCart>)
                }
            </div> */}
        </div>
    );
};

export default Cart;