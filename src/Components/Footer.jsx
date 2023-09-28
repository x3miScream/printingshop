import React from 'react';
import '../Styles/Footer.css';
import FooterSubscribtion from './FooterSubscribtion.jsx';
import FooterLinks from './FooterLinks.jsx';
import FooterSocials from './FooterSocials.jsx';

const Footer = (props) => {
    const {isShowSubscribtion, isShowLinks, isShowSocials, isStandAlone} = props;

    const footerContainerClass = (isStandAlone ? "footer-container-gray" : 'footer-container-black')

    return(<>
        {/* <div className='footer-container footer-container-black'> */}
        <div className= {'footer-container m-t-l ' + footerContainerClass}>
            
            <hr className='divider-thin m-b-s'></hr>
            {isShowSubscribtion ? <FooterSubscribtion></FooterSubscribtion> : null}
            {isShowLinks ? <FooterLinks></FooterLinks> : null}
            {isShowSocials ? <FooterSocials></FooterSocials> : null}
        </div>
    </>);
};

export default Footer;
