import React, {useState, useEffect} from 'react';
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
    console.log(cardsData);
    const id = (location.state === undefined || location.state === null ? -1 : location.state.id);
    const productItem = cardsData.services.find((item) => {return item.id === id});

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if(redirect != '')
    {
        return <Navigate to={redirect} />
    }

    const getAQuoteClickHandler = () => {
        setRedirect(settings.hostingBaseUrl + '/RequestQuotation');
    };

    return(
        <>
        {productItem === undefined ?  <h4 className='text__m section-header'>Product Not Found.</h4>:
            <React.Fragment>
                <div className='product__item'>
                    <div className='product__item__details__section'>
                        <div className='product__item__img__section'>
                            <img src={settings.hostingBaseUrl + productItem.imageSource} alt='Product' className='product__item__img'></img>
                        </div>
                        <div className='product__item__info__section'>
                            <h4 className='text__m section-header'>{productItem.label}</h4>

                            {productItem.productDescriptionParagraphs === undefined ? null : productItem.productDescriptionParagraphs.map((item, index) => {
                                return <h6 key={index} className='text__xs m-t-m'>{item}</h6>
                            })}

                            <Button className='btns' buttonStyle='btn--light--blue' buttonSize='btn--large' onclick={getAQuoteClickHandler} link='#' isLink={true}>
                                GET A QUOTE
                            </Button>
                        </div>
                    </div>

                    <div className='product__item__additional__info'>
                        {productItem.additionalInfo === undefined ? '' : 
                            productItem.additionalInfo.map((item, index) => { return <React.Fragment key={index}>
                                    <hr className='divider-solid m-t-l m-b-l'></hr>
                                    
                                    {item.title === undefined ? '' : <h6 className='text__m section-header'>{item.title}</h6>}

                                    {item.titleDescription === undefined ? '' : <h6 className='text__xs m-b-s section-header'>{item.titleDescription}</h6>}

                                    {item.images === undefined ? '' : <ul className='product__item__add__info__image__section m-t-m'>
                                    {item.images.map((imageItem, imageIndex) => { return <li key={imageIndex}>
                                        <img className='product__item__add__info__image' src={settings.hostingBaseUrl + imageItem.imageSrc}></img>
                                        {imageItem.label === undefined ? '' : <h6 className='text__xs product__item_add_info__label m-t-s'>{imageItem.label}</h6>}
                                        {imageItem.description === undefined ? '' : <h6 className='text__xxs product__item_add_info__decsription m-t-xs'>{imageItem.description}</h6>}
                                        
                                        </li> })}
                                    </ul>}
                                </React.Fragment>
                            })
                        }
                    </div>
                        
                        
                    <h6 className='text__s m-t-xl section-header'>Not what you are looking for?</h6>

                    <hr className='divider-solid m-b-m'></hr>

                    <div className='browse__other__items'>
                        <h6 className='text__m m-t-s section-header'>Check out other services</h6>

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