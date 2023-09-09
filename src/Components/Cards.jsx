import React from 'react'
import CardItem from './CardItem.jsx';
import '../Styles/Cards.css';
import cardsData from '../Data/Products.json'
import settings from '../Data/Settings.json'

const Cards = () => {

    return(
        <div className='cards'>
            <div className='cards__container'>
                {/* {cardsData.map((item, index) => {return <ul className='cards__items'> {item.map((subItem, subIndex) => <CardItem id={subItem.id} src={settings.hostingBaseUrl + subItem.imageSource} text={subItem.text} label={subItem.label} path={subItem.path}> </CardItem>)} </ul> })} */}
                <ul className='cards__items'>
                {cardsData.map((item, index) => {return item.map((subItem, subIndex) => <CardItem id={subItem.id} src={settings.hostingBaseUrl + subItem.imageSource} text={subItem.text} label={subItem.label} path={subItem.path}> </CardItem>) })}
                </ul>
            </div>
        </div>
    );
};

export default Cards;