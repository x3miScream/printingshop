import React from 'react';
import Cards from '../Cards.jsx';
import Footer from '../Footer.jsx';
import '../../Styles/Products.css';

const Products = (props) => {
    const {isStandAlone} = props;

    return(
        <React.Fragment>
            <div className='products m-t-l'>
                <span className='section-header text__m'>What We Do</span>
                
                <Cards />
            </div>
            {isStandAlone ? <Footer isShowLinks={false} isShowSocials={true} isStandAlone={true}/> : null}
        </React.Fragment>
    );
};

export default Products;