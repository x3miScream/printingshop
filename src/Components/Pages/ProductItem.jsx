import React from 'react';
import {useLocation} from 'react-router-dom';
import cardsData from '../../Data/Products.json'
import settings from '../../Data/Settings.json'

const ProductItem = (props) => {
    const location = useLocation();
    const {id} = location.state;

    const productItem = cardsData.find((item) => {return item.id === id});

    return(
        <>
            Product Item
            {productItem.text}
        </>
    );
};

export default ProductItem;