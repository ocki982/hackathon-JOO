import DrinkItem from '../DrinkItem/DrinkItem';
import React from 'react';
import './DrinkList.scss'

const DrinkList = (props) => {
    return (
        <div className="drinkList">
                <DrinkItem/>
        </div>
    );
};

export default DrinkList;