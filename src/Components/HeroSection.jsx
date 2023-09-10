import React from 'react';
import '../App.css'
import Button from './Button.jsx';
import '../Styles/HeroSection.css';

const HeroSection = (props) => {
    const {scrollToHandler} = props;

    return(
        <div className='hero-container'>
            {/* <video src='../Videos/video-1.mp4' autoPlay loop muted /> */}
            <h1>L PRINT</h1>
            <p>What are you waiting for?</p>
            <div className='hero-btns'>
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large' onclick={scrollToHandler} link='#' isLink={true}>
                        GET A QUOTE
                </Button>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large' isLink={true}>
                        CONTACT US
                </Button>
            </div>
        </div>
    )
};

export default HeroSection;