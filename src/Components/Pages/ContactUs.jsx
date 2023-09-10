import React from 'react';
import {Link} from 'react-router-dom'
import Map from '../Map.jsx';
import Footer from '../Footer.jsx';
import '../../Styles/ContactUs.css';

const ContactUs = (props) => {
    const {isStandAlone} = props;

    return(
        <React.Fragment>
            <div className='contact-us'>
                <h6 className='section-header text__md m-t-m'>
                    CONTACT US
                </h6>
                <div className='contact__us__content'>
                    <div className='contact__us__info__section'>
                        <span className="contact-us-link facebook" to='#' target='_blank' are-label='Faceboook'>
                            <i className="contact__us__icon fab fa-facebook-f"></i>
                            <span>Facebook.com - L Print</span>
                        </span>
                        <span className="contact-us-link instagram" to='#' target='_blank' are-label='Instagram'>
                            <i className="contact__us__icon fab fa-instagram"></i>
                            <span>Instagram.com - L Print</span>
                        </span>
                        <span className="contact-us-link twitter" to='#' target='_blank' are-label='Twitter'>
                            <i className="contact__us__icon fab fa-twitter"></i>
                            <span>Twitter.com - L Print</span>
                        </span>
                        <span className="contact-us-link linkedin" to='#' target='_blank' are-label='LinkedIn'>
                            <i className="contact__us__icon fab fa-linkedin"></i>
                            <span>LinkedIn.com - L Print</span>
                        </span>
                        <span className="contact-us-link linkedin m-t-m" to='#' target='_blank' are-label='LinkedIn'>
                            <i className="contact__us__icon fa fa-map-marker"></i>
                            <span>Lingkaran Syed Putra, Mid Valley City, 59200 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur</span>
                        </span>
                    </div>
                    <div className='contact__us__navigation__section m-t-m'>
                        <Map></Map>
                    </div>
                </div>
            </div>
            {isStandAlone ? <Footer isShowLinks={false} isShowSocials={true} isStandAlone={true}/> : null}
        </React.Fragment>
    )
};

export default ContactUs;