import React from 'react';
import Cards from '../Cards.jsx';
import '../../Styles/Products.css';

const Products = () => {
    return(
        <div className='products'>
            <h6 className='section-header text__md m-t-m'>
                CHECK OUT OUR SERVICES
            </h6>
            <Cards />
        </div>
    );
};

export default Products;