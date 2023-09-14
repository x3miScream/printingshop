import React from 'react';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import settings from '../Data/Settings.json'

const CardItem = (props) => {
    const navigate = useNavigate();

    const handleRedirectToProduct = () => {
        navigate((settings.hostingBaseUrl + '/Item'), {replace: true, state: {id: props.id}});
    }

    return(
        <>
         <li className='cards__item' key={props.id} onClick={handleRedirectToProduct}>
            <Link className='cards__item__link' to={props.path}>
                <figure className='cards__item__pic-wrap' data-category={props.label}>
                    <img src={props.src} alt='Travel Image' className='cards__item__img'></img>
                </figure>

                <div className='cards__item__info'>
                    <h5 className='cards__item__text'>
                        {props.text}
                    </h5>
                </div>
            </Link>
         </li>
        </>
    )
};

export default CardItem;