import React from 'react';
import './DrinkDetails.scss'
import Wine from '../../assets/images/steak-wine.jpg'

const DrinkDetails = () => {
    return (
        <div className='drinkDetails'>
            <section className='drinkDetails__flex'>
                <img src={Wine} className='drinkDetails__image' alt="drink"></img>
                <div className='drinkDetails__box'>
                    <p className='drinkDetails__text'>Some text about the drink</p>
                    <p className='drinkDetails__text'>Alcohol Value</p>
                    <p className='drinkDetails__text'>Price</p>
                    <button className='drinkDetails__button'>Add</button>
                </div>
            </section>
        </div>
    );
};

export default DrinkDetails