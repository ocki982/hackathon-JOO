import React from 'react';
import './Sidebar.scss'
import City from '../../assets/images/schnebly-winery.jpg'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <img className="sidebar__image" src={City} alt="city"></img>
            <p className="sidebar__text">Welcome to,</p>
            <h1 className="sidebar__title">City Name</h1>
            <p className="sidebar__text">Some text about the city</p>
        </div>
    );
};

export default Sidebar;