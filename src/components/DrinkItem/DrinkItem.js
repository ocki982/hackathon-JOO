import React from 'react';
import Drink from '../../assets/images/red-wines.jpg'

function DrinkItem (props) {
    return (
        <div className="drinkItem">
            <div className="drinkItem__box">
                <h1 className="drinkItem__title">Drink</h1>
                <img className="drinkItem__image" src={Drink} alt="drink"></img>
            </div>
            <div className="drinkItem__box">
                <h1 className="drinkItem__title">Drink</h1>
                <img className="drinkItem__image" src={Drink} alt="drink"></img>
            </div>
            <div className="drinkItem__box">
                <h1 className="drinkItem__title">Drink</h1>
                <img className="drinkItem__image" src={Drink} alt="drink"></img>
            </div>
        </div>
    );
};

export default DrinkItem;