import React, {useState} from 'react';
import {useLocation, Navigate} from 'react-router-dom';
import cardsData from '../../Data/Products.json'
import settings from '../../Data/Settings.json'
import Cards from '../Cards.jsx';
import Button from '../Button.jsx';
import Footer from '../Footer.jsx';

import '../../Styles/ProductItem.css';

const ProductItem = (props) => {
    const location = useLocation();
    const [redirect, setRedirect] = useState('')
    
    const id = (location.state === undefined || location.state === null ? -1 : location.state.id);

    const productItem = cardsData.find((item) => {return item.id === id});

    if(redirect != '')
    {
        return <Navigate to={redirect} />
    }

    const getAQuoteClickHandler = () => {
        setRedirect(settings.hostingBaseUrl + '/RequestQuotation');
    };

    return(
        <>
        {productItem === undefined ?  <h4 className='text__md section-header'>Product Not Found.</h4>:
            <React.Fragment>
                <div className='product__item'>
                    <div className='product__item__details__section'>
                        <div className='product__item__img__section'>
                            <img src={settings.hostingBaseUrl + productItem.imageSource} alt='Product' className='product__item__img'></img>
                        </div>
                        <div className='product__item__info__section'>
                            <h4 className='text__md section-header'>{productItem.text}</h4>
                            <h6 className='text__xs m-t-m'>{productItem.productDescriptionP1}</h6>
                            <h6 className='text__xs m-t-s'>{productItem.productDescriptionP2}</h6>
                            <h6 className='text__xs m-t-s'>{productItem.productDescriptionP3}</h6>

                            <Button className='btns' buttonStyle='btn--light--blue' buttonSize='btn--large' onclick={getAQuoteClickHandler} link='#' isLink={true}>
                                GET A QUOTE
                            </Button>
                        </div>
                    </div>

                    <hr className='divider-solid m-t-s'></hr>

                    <div className='browse__other__items'>
                        <h6 className='text__md m-t-s section-header'>Check Out Other Services</h6>

                        <Cards currentCardId={productItem.id}></Cards>
                    </div>
                </div>
                <Footer isShowLinks={false} isShowSocials={true} isStandAlone={true}/>
            </React.Fragment>
        }
        </>
    );
};

export default ProductItem;