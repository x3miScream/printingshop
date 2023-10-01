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
                <h6 className='section-header text__m m-t-m'>
                    Contact Us
                </h6>
                <div className='contact__us__content'>
                    <div className='contact__us__info__section'>
                        {Settings.socials.map((item, index) => {return <span key={"social_" + index} className={"contact-us-link " + item.iconClass + ""} to='#' target='_blank' are-label={item.label}>
                                <i className={"contact__us__icon fab " + item.faIconClass}></i>
                                <Link to={item.address}>{item.label}</Link>
                            </span>})}
                        {Settings.addresses.map((item, index) => {return <>
                                <span key={"label_" + index} className="contact-us-link m-t-m" to='#' target='_blank'>
                                    <i className="contact__us__icon fa fa-map-marker"></i>
                                    <span>{item.label}</span>
                                </span>
                                <span key={"detail_" + index} className="contact-us-link m-t-m" to='#' target='_blank'>
                                    <span className='text__xs'>{item.address}</span>
                                </span>
                            </>})}
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