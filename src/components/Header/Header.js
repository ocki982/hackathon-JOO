import React from 'react';
import './Header.scss'
import Avatar from '../../assets/images/avatar.jpg'
import Logo from '../../assets/images/wine-logo.png'

const Header = () => {
    return (
        <div className="header">
            <img className ="header__logo" src={Logo} alt="logo"></img>
            <p className='header__item header__slogan'>Live, Laugh, Liver-Failure</p>
            <nav className="header__nav">
                <div className="header__fill-bar"></div>
                <img className="header__avatar" src={Avatar} alt="avatar"></img>
                <ul className="header__list">
                    <li className="header__item header__border">Home</li>
                    <li className="header__item">Name</li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;