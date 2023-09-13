import React from 'react';
import {Link} from 'react-router-dom';
import settings from '../Data/Settings.json'

const FooterSocials = () => {
    return(<>
        <section className='social-media'>
            <div className="social-media-wrap">
                <div className="footer-logo">
                    <Link to={settings.hostingBaseUrl + '/'} className='social-logo'>
                        L PRINT <i className="fab fa-typeo3"></i>
                    </Link>
                </div>
                <small className='website-rights'>L PRINT e 2020</small>
                <div className='social-icons'>
                    <Link className="social-icon-link facebook" to='/' target='_blank' are-label='Faceboook'>
                        <i className="fab fa-facebook-f"></i>
                    </Link>
                    <Link className="social-icon-link instagram" to='/' target='_blank' are-label='Instagram'>
                        <i className="fab fa-instagram"></i>
                    </Link>
                    <Link className="social-icon-link twitter" to='/' target='_blank' are-label='Twitter'>
                        <i className="fab fa-twitter"></i>
                    </Link>
                    <Link className="social-icon-link linkedin" to='/' target='_blank' are-label='LinkedIn'>
                        <i className="fab fa-linkedin"></i>
                    </Link>
                </div>
            </div>
        </section>
    </>);
};

export default FooterSocials;