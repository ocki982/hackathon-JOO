import React from 'react';
import DrinkItem from './DrinkItem';
import "./DrinkItem.scss";

function Sidebar ({drinks, drink, filtereddrinks}) {
    return (
        <div className="sidebar">
            <img className="sidebar__image" alt="city"></img>
            <h1 className="sidebar__title">City Name</h1>
            <p className="sidebar__text">Some text about the city</p>
            {drinks.map((drink) => (
                <DrinkItem
                    key={drink.id}
                    id={drink.id}
                    name={drink.name}
                    price={drink.price}
                    image={drink.image} />
            ))}
        </div>
    );
};

export default Sidebar;