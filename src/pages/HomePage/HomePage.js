import React, { Component } from 'react';
import DrinkDetails from '../../components/DrinkDetails/DrinkDetails';
// import Hero from '../../components/Hero/Hero';
import './HomePage.scss'

class HomePage extends Component {
    render() {
        return (
        <div>
            <DrinkDetails/>
        </div>
        );
    }
}    

export default HomePage;