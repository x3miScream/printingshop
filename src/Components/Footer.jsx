import React from 'react';
import '../Styles/Footer.css';
import FooterSubscribtion from './FooterSubscribtion.jsx';
import FooterLinks from './FooterLinks.jsx';
import FooterSocials from './FooterSocials.jsx';

const Footer = () => {
    return(<>
        <div className='footer-container'>
            {/* <FooterSubscribtion></FooterSubscribtion> */}
            <FooterLinks></FooterLinks>
            <FooterSocials></FooterSocials>
        </div>
    </>);
};

export default Footer;
