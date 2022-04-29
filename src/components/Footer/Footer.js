import React from 'react';

const Footer = () => {
    return (
        <div className="footer">
            <p className="footer__text">Back to Top</p>
            <p className="footer__text">©Live Laugh, Live Failure. All Rights Reserved.</p>
            <div>
                <p className="footer__text">Privacy & Terms of Use</p>
                <p className="footer__text">About LLLF</p>
                <p className="footer__text">Become a Contributor</p>
                <p className="footer__text">For Advertisers</p>
                <p className="footer__text">Login</p>
            </div>
            <div>
                <img className="footer__social" alt="facebook"></img>
                <img className="footer__social" alt="twitter"></img>
                <img className="footer__social" alt="instgram"></img>
            </div>
        </div>
    );
};

export default Footer;