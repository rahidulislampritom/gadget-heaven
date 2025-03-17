import React from 'react';
import DisplayCart from './DisplayCart';

const Wishlist = ({ wishList }) => {
    console.log(wishList)
    return (
        <div>
            <h2>wishlist</h2>
            <div>
                {
                    wishList.map((wishData, idx) => <DisplayCart key={idx} card={wishData}></DisplayCart>)
                }
            </div>
        </div>
    );
};

export default Wishlist;