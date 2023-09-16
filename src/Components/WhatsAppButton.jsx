import React from 'react';
import {Link} from 'react-router-dom';
import Settings from '../Data/Settings.json';
import '../Styles/WhatsAppButton.css';

const WhatsAppButton = () => {
    return(
        <div className='whatsapp--button'>
            <Link to={'https://wa.me/+60173528881'}>
                <img className='whatsapp--icon--img' src={Settings.hostingBaseUrl + '/Images/Icons/whatsapp_icon.png'}></img>
            </Link>
        </div>
    );
};

export default WhatsAppButton;