// add card list to data base 
const getCardListFromLS = () => {
    const storedCartListStringify = localStorage.getItem('card');

    if (storedCartListStringify) {
        const storedCartListParse = JSON.parse(storedCartListStringify);
        return storedCartListParse;
    }
    else {
        return [];
    }
}



const addCardToLS = (id) => {

    const storedList = getCardListFromLS();

    if (storedList.includes(id)) {
        console.log(id, 'Already exists in the card list')
        return;
    }
    else {
        storedList.push(id);
        const storedListStringify = JSON.stringify(storedList);
        localStorage.setItem('card', storedListStringify);
    }
}

// add wishlist to data base 
const getStoredWishListData = () => {
    const storedWishListDataSfy = localStorage.getItem('wishlist');

    if (storedWishListDataSfy) {
        const storedWishListDataParse = JSON.parse(storedWishListDataSfy);
        return storedWishListDataParse;
    }
    else {
        return [];
    }
}

const addWishListLS = (id) => {

    const storedWisList = getStoredWishListData()

    if (storedWisList.includes(id)) {
        console.log(id, 'Already exists in the wishlist');
        return;
    }
    else {
        storedWisList.push(id);
        const storedWishListSfy = JSON.stringify(storedWisList);
        localStorage.setItem('wishlist', storedWishListSfy);
    }
}

export { addCardToLS, getCardListFromLS, addWishListLS, getStoredWishListData };