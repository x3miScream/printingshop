import React from 'react';
import '../../Styles/Testimonials.css';
import settings from '../../Data/Settings.json'

const Testimonials = () => {
    return(
        <div className='testimonials p-b-l p-t-l'>
            <h6 className='text__m m-t-m'>
                Partnership
            </h6>
            
            <h6 className='text__xs m-t-s'>
                Our trusted clients range spans from small businesses all the way up to Country's most recognized organizations, the portfolio speaks for itself.
            </h6>

            <div className='testimonials__brand__list m-t-l'>
                <div className='testimonials__brand__logo__slider'>
                <span className="testimonials__brand__logo__img__container" are-label='visa'>
                        <img src={settings.hostingBaseUrl + "/Images/Logos/ajinomoto.svg"}></img>
                    </span>

                    <span className="testimonials__brand__logo__img__container" are-label='visa'>
                        <img className='testimonials__brand__logo__img' src={settings.hostingBaseUrl + "/Images/Logos/samsung.svg"}></img>
                    </span>

                    <span className="testimonials__brand__logo__img__container" are-label='visa'>
                        <img className='testimonials__brand__logo__img' src={settings.hostingBaseUrl + "/Images/Logos/apm.svg"}></img>
                    </span>

                    <span className="testimonials__brand__logo__img__container" are-label='visa'>
                        <img className='testimonials__brand__logo__img' src={settings.hostingBaseUrl + "/Images/Logos/canon.svg"}></img>
                    </span>

                    <span className="testimonials__brand__logo__img__container" are-label='visa'>
                        <img className='testimonials__brand__logo__img' src={settings.hostingBaseUrl + "/Images/Logos/casio.svg"}></img>
                    </span>

                    <span className="testimonials__brand__logo__img__container" are-label='visa'>
                        <img className='testimonials__brand__logo__img' src={settings.hostingBaseUrl + "/Images/Logos/celcom.svg"}></img>
                    </span>
                </div>

                <div className='testimonials__brand__logo__slider'>
                    <span className="testimonials__brand__logo__img__container" are-label='visa'>
                        <img src={settings.hostingBaseUrl + "/Images/Logos/ajinomoto.svg"}></img>
                    </span>

                    <span className="testimonials__brand__logo__img__container" are-label='visa'>
                        <img className='testimonials__brand__logo__img' src={settings.hostingBaseUrl + "/Images/Logos/samsung.svg"}></img>
                    </span>

                    <span className="testimonials__brand__logo__img__container" are-label='visa'>
                        <img className='testimonials__brand__logo__img' src={settings.hostingBaseUrl + "/Images/Logos/apm.svg"}></img>
                    </span>

                    <span className="testimonials__brand__logo__img__container" are-label='visa'>
                        <img className='testimonials__brand__logo__img' src={settings.hostingBaseUrl + "/Images/Logos/canon.svg"}></img>
                    </span>

                    <span className="testimonials__brand__logo__img__container" are-label='visa'>
                        <img className='testimonials__brand__logo__img' src={settings.hostingBaseUrl + "/Images/Logos/casio.svg"}></img>
                    </span>

                    <span className="testimonials__brand__logo__img__container" are-label='visa'>
                        <img className='testimonials__brand__logo__img' src={settings.hostingBaseUrl + "/Images/Logos/celcom.svg"}></img>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;