import React from 'react';
import Facebook from '../../assets/icons/Icon-facebook.svg'
import Twitter from '../../assets/icons/Icon-twitter.svg'
import Instagram from '../../assets/icons/Icon-instagram.svg'

import './Footer.scss'

const Footer = () => {
    return (
        <div className="footer">
            <p className="footer__text">↑ Back to Top</p>
            <p className="footer__text">©Live Laugh, Live Failure. All Rights Reserved.</p>
            <div className="footer__flex">
                <p className="footer__text">Privacy & Terms of Use</p>
                <p className="footer__text">About LLLF</p>
                <p className="footer__text">Become a Contributor</p>
                <p className="footer__text">For Advertisers</p>
                <p className="footer__text">Login</p>
            </div>
            <div>
                <img className="footer__social" src={Facebook} alt="facebook"></img>
                <img className="footer__social" src={Twitter} alt="twitter"></img>
                <img className="footer__social" src={Instagram} alt="instagram"></img>
            </div>
        </div>
    );
};

export default Footer;