import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection.jsx';
import Footer from '../Footer.jsx';
import BusinessCard from './BusinessCard.jsx';
import Testimonials from './Testimonials.jsx';
import CallToAction from './CallToAction.jsx';
import Products from './Products.jsx';

const Home = (props) => {
    const {scrollToHandler} = props;

    return(
        <>
            <HeroSection scrollToHandler={scrollToHandler}></HeroSection>
            <Products></Products>
            <BusinessCard />
            <Testimonials />
            <CallToAction />
            <Footer isShowSubscribtion={false} isShowLinks={false} isShowSocials={true} isStandAlone={false}/>
        </>
    )
}

export default Home;