import React from 'react';

function DrinkItem ({ name, drink, alchol, price, id}) {
    return (
        <div className="drinkItem" onClick={() => {drinks(id)}}>
            <img className="drinkItem__image" alt="drink"></img>
            <h1 className="drinkItem__title">{name}</h1>
            <p className="drinkItem__text">{drink}</p>
            <p className="drinkItem__text">{alchol}</p>
            <p className="drinkItem__text">{price}</p>
        </div>
    );
};

export default DrinkItem;