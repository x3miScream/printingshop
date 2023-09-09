import React, {useRef} from 'react';
import '../App.css'
import Button from './Button.jsx';
import '../Styles/HeroSection.css';

const HeroSection = () => {
    const ref = useRef(null);

    const handleGetAQuoteClick = () => {
        alert('hi')
        document.getElementById('callToActionSection').scrollIntoView();
    };

    return(
        <div className='hero-container'>
            {/* <video src='../Videos/video-1.mp4' autoPlay loop muted /> */}
            <h1>L PRINT</h1>
            <p>What are you waiting for?</p>
            <div className='hero-btns'>
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large' onclick={handleGetAQuoteClick} link='#' isLink={true}>
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