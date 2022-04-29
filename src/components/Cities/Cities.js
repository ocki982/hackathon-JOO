import React from 'react';
import './Cities.scss'
import citiesBottle from '../../assets/images/nav_bottle1.png';
import citiesBottle2 from '../../assets/images/nav_bottle2.png';
import citiesBottle3 from '../../assets/images/nav_bottle3.png';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';


const Cities = (props) => {
    console.log("cities props", props.cities)
    return (
        <div className="cities">
            <Link to='/Mendoza'>
                <div className="cities__bottle">
                    <p className="cities__title">{props.cities[0]}</p>
                    <img className="cities__image" alt="cities" src={citiesBottle}/>
                </div>
            </Link>
            <Link to='/Temecula'>
                <div className="cities__bottle">
                    <p className="cities__title">{props.cities[2]}</p>
                    <img className="cities__image" alt="cities" src={citiesBottle2}/>
                </div>
            </Link>
            <Link to='/Miami'>
                <div className="cities__bottle">
                    <p className="cities__title">{props.cities[1]}</p>
                    <img className="cities__image" alt="cities" src={citiesBottle3}/>
                </div>
            </Link>
        </div>

    );
};

export default Cities;