import Cities from '../Cities/Cities';
import React from 'react';
import './Hero.scss';

const Hero = (props) => {
    console.log("Hero props", props)
    return (
        <div className='hero'>
            <Cities cities={props.cities}/>
        </div>
   
   );
};

export default Hero;