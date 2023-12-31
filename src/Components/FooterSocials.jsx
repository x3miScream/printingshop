import React from 'react';
import {Link} from 'react-router-dom';
import Settings from '../Data/Settings.json'

const FooterSocials = () => {
    return(<>
        <section className='social-media'>
            <div className="social-media-wrap">
                <div className="footer-logo">
                    <Link to={Settings.hostingBaseUrl + '/'} className='social-logo'>
                        {/* {Settings.businessName} <i className="fab fa-typeo3"></i> */}
                        <img src={Settings.hostingBaseUrl + '/Images/Icons/text_logo_black_on_white.png'} className='footer-logo-name' alt='logo'></img>
                    </Link>
                </div>
                <small className='website-rights'>{Settings.businessName} e 2020</small>
                <div className='social-icons'>
                    <Link className="social-icon-link facebook" to={Settings.contacts.facebook} target='_blank' are-label='Faceboook'>
                        <i className="fab fa-facebook-f"></i>
                    </Link>
                    <Link className="social-icon-link instagram" to={Settings.contacts.instagram} target='_blank' are-label='Instagram'>
                        <i className="fab fa-instagram"></i>
                    </Link>
                    <Link className="social-icon-link twitter" to={Settings.contacts.twitter} target='_blank' are-label='Twitter'>
                        <i className="fab fa-twitter"></i>
                    </Link>
                    <Link className="social-icon-link linkedin" to={Settings.contacts.linkedIn} target='_blank' are-label='LinkedIn'>
                        <i className="fab fa-linkedin"></i>
                    </Link>
                </div>
            </div>
        </section>
    </>);
};

export default FooterSocials;