import React from 'react';
import '../../Styles/BusinessCard.css';
import settings from '../../Data/Settings.json'

const BusinessCard = () => {
    return(
        <>
            <div className='business-card'>
                <div className='business__card__container'>
                    <div className='business__card__img__section'>
                        <img src={settings.hostingBaseUrl + '/Images/img-16.jpg'} className='business__card__img'></img>
                    </div>
                    
                    <div className='biness__card__info__section'>
                        <h4 className='text__md sectino-header'>Printing Design Services</h4>
                        <h6 className='text__sm'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
                        </h6>
                        <h6 className='text__sm'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
                        </h6>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BusinessCard;