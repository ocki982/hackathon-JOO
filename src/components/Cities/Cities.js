import React from 'react';
import './Cities.scss'
import citiesBottle from '../../assets/images/nav_bottle1.png';

const Cities = () => {
    return (
        <div className="cities">
            <img className="cities__image" alt="cities" src={citiesBottle}/>
        </div>
    );
};

export default Cities;