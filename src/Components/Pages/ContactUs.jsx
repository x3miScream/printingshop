import React from 'react';
import Footer from '../Footer.jsx';
import '../../Styles/ContactUs.css';

const ContactUs = (props) => {
    const {isStandAlone} = props;

    return(
        <React.Fragment>
            <div className='contact-us'>
                <h6 className='section-header text__md m-t-m'>
                    CONTACT US
                </h6>
                <div className='contact__us__content'>
                    <div className='contact__us__info__section'>

                    </div>
                    <div className='contact__us__navigation__section'>

                    </div>
                </div>
            </div>
            {isStandAlone ? <Footer isShowLinks={false} isShowSocials={true} isStandAlone={true}/> : null}
        </React.Fragment>
    )
};

export default ContactUs;