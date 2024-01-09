import React from 'react';
import Footer from '../Footer.jsx';
import '../../Styles/BusinessCard.css';
import settings from '../../Data/Settings.json'

const BusinessCard = (props) => {
    const {isStandAlone} = props;
    return(
        <>
            <div className='business-card p-t-l p-b-l'>
                
                <div className='business__card__container'>
                    <div className='business__card__img__section'>
                        <div className='container__box__shape'>
                        <img src={settings.hostingBaseUrl + '/Images/AboutUs/img-002.png'} className='business__card__img'></img>
                        </div>

                        <div className='container__box__shape ontop'>
                            <img src={settings.hostingBaseUrl + '/Images/AboutUs/img-001.png'} className='business__card__img'></img>
                        </div>

                        <div className='container__box__shape ontop'>
                            <img src={settings.hostingBaseUrl + '/Images/AboutUs/img-003.png'} className='business__card__img'></img>
                        </div>
                    </div>
                    
                    <div className='biness__card__info__section'>
                        <span className='text__m'>About Us</span>
                        <h4 className='text__m sectino-header'>PRINTING DESIGN SERVICES</h4>
                        <h6 className='text__xs'>
                            TRIPACK PACK is a printing service provider that specializes in offset printing and packaging. With a competitive edge machinery and staff number reaching 40 we provide top level quality services to make sure your product has the presentation in the market. 
                        </h6>
                        <h6 className='text__xs'>
                            With services such as any types of Uni Color, Inner Boxes, Offset Color E-flute and other packaging, All types of printing jobs, we have managed to satisfy clients as big as APM Group, Canon Opto (M) Bhd, Casio (M) Sdn Bhd and many more.
                        </h6>
                    </div>
                </div>

                <div className='business__card__footer'>
                    <div className='business__card__footer__box'><h6 className='text__s'>15+ Happy Major Clients</h6></div>
                    <div className='business__card__footer__box'><h6 className='text__s'>40 Staff Power</h6></div>
                    <div className='business__card__footer__box'><h6 className='text__s'>15+ Types Of Machinery</h6></div>
                </div>
            </div>

            {isStandAlone ? 
            <React.Fragment>
                <div className='m-t-l'></div>
                <Footer isShowLinks={false} isShowSocials={true} isStandAlone={true}/>
            </React.Fragment>
            : null}
        </>
    );
};

export default BusinessCard;