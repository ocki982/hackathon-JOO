import React from 'react';

const Header = () => {
    return (
        <div className="header">
            <img className ="header__logo" alt="logo"></img>
            <div className="header__fill-bar"></div>
            <nav>
                <img className="header__avatar" alt="avatar"></img>
                <ul className="header__list">
                    <li className="header__item">Home</li>
                    <li className="header__item">Name</li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;