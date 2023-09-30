import React from 'react';

import BusinessCard from './BusinessCard.jsx';
import Testimonials from './Testimonials.jsx';
import Footer from '../Footer.jsx';

const AboutUs = (props) => {
    const {isStandAlone} = props;

    return(<>
        <div className='about-us'>
            <div className='about-us-inner'>
            <BusinessCard></BusinessCard>
            <hr className='divider-thin'></hr>
            <Testimonials></Testimonials>
            </div>
        </div>

        {isStandAlone ? 
        <React.Fragment>
            <div className='m-t-l'></div>
            <Footer isShowLinks={false} isShowSocials={true} isStandAlone={true}/>
        </React.Fragment>
        : null}
    </>);
};

export default AboutUs;