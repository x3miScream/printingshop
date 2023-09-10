import React from 'react';
import Cards from '../Cards.jsx';
import Footer from '../Footer.jsx';
import '../../Styles/Products.css';

const Products = (props) => {
    const {isStandAlone} = props;

    return(
        <React.Fragment>
            <div className='products'>
                <h6 className='section-header text__md m-t-m'>
                    CHECK OUT OUR SERVICES
                </h6>
                <Cards />
            </div>
            {isStandAlone ? <Footer isShowLinks={false} isShowSocials={true} isStandAlone={true}/> : null}
        </React.Fragment>
    );
};

export default Products;