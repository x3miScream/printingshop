import React from 'react';
import {Link} from 'react-router-dom'
import Map from '../Map.jsx';
import Footer from '../Footer.jsx';
import Settings from '../../Data/Settings.json';
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
                            <Link to={Settings.contacts.facebook}>Facebook.com - L Print</Link>
                        </span>
                        <span className="contact-us-link instagram" to='#' target='_blank' are-label='Instagram'>
                            <i className="contact__us__icon fab fa-instagram"></i>
                            <Link to={Settings.contacts.instagram}>Instagram.com - L Print</Link>
                        </span>
                        <span className="contact-us-link twitter" to='#' target='_blank' are-label='Twitter'>
                            <i className="contact__us__icon fab fa-twitter"></i>
                            <Link to={Settings.contacts.twitter}>Twitter.com - L Print</Link>
                        </span>
                        <span className="contact-us-link linkedin" to='#' target='_blank' are-label='LinkedIn'>
                            <i className="contact__us__icon fab fa-linkedin"></i>
                            <Link to={Settings.contacts.linkedIn}>LinkedIn.com - L Print</Link>
                        </span>
                        {
                            Settings.addresses.map((item, index) => {return <>
                                <span className="contact-us-link m-t-m" to='#' target='_blank'>
                                    <i className="contact__us__icon fa fa-map-marker"></i>
                                    <span>{item.title}</span>
                                </span>
                                <span className="contact-us-link m-t-m" to='#' target='_blank'>
                                    <span>{item.address}</span>
                                </span>
                            </>})
                        }
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