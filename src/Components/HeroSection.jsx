import React from 'react';
import '../App.css'
import Button from './Button.jsx';
import settings from '../Data/Settings.json'
import '../Styles/HeroSection.css';

const HeroSection = (props) => {
    const {scrollToHandler} = props;

    return(
        <div className='hero-container'>
            {/* <video src='../Videos/video-1.mp4' autoPlay loop muted /> */}
            <h1>{settings.businessName}</h1>
            <p>PRINTING & PACKAGING</p>

            <h2 className='hero-slogan text__l m-t-s'>Your experience with us will go beyond your expectations.</h2>

            <div className='hero-btns'>
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large' onclick={scrollToHandler} link='#' isLink={true}>
                        GET A QUOTE
                </Button>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large' isLink={true} link={settings.hostingBaseUrl + '/ContactUs'}>
                        CONTACT US
                </Button>
            </div>
        </div>
    )
};

export default HeroSection;