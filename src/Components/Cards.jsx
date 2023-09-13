import React from 'react'
import CardItem from './CardItem.jsx';
import '../Styles/Cards.css';
import cardsData from '../Data/Products.json'
import settings from '../Data/Settings.json'

const Cards = (props) => {
    const {currentCardId} = props;

    return(
        <div className='cards'>
            <div className='cards__container'>
                {/* {cardsData.map((item, index) => {return <ul className='cards__items'> {item.map((item, subIndex) => <CardItem id={item.id} src={settings.hostingBaseUrl + item.imageSource} text={item.text} label={item.label} path={item.path}> </CardItem>)} </ul> })} */}
                <ul className='cards__items'>
                    {cardsData.map((item, index) => { if(item.id !==currentCardId) return <CardItem id={item.id} src={settings.hostingBaseUrl + item.imageSource} text={item.text} label={item.label} path={settings.hostingBaseUrl + item.path}> </CardItem>}) }
                </ul>
            </div>
        </div>
    );
};

export default Cards;