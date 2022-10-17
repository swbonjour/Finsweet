import React from 'react'

import "./Footer.scss"

import FacebookSvg from './FacebookSvg'
import TwitterSvg from './TwitterSvg'
import InstagramSvg from './InstagramSvg'
import InSvg from './InSvg'

export default function Footer() {
  return (
    <div>
        <footer className="footer">
            <div className="footer__logo">{"{"}Finsweet</div>
            <nav className="footer__nav">
                <div className="footer__nav__ul">
                    <li className="footer__nav__ul__item">Home</li>
                    <li className="footer__nav__ul__item">Menu</li>
                    <li className="footer__nav__ul__item">About Us</li>
                    <li className="footer__nav__ul__item">Our Story</li>
                    <li className="footer__nav__ul__item">Blog</li>
                    <li className="footer__nav__ul__item">Contact us</li>
                </div>
            </nav>
            <div className="footer__downside">
                <div className="footer__downside__line"></div>
                <div className="footer__downside__content">
                    <p className="footer__downside__content__copyright">© 2021 Finsweet | All rights reserved.</p>
                    <div className="footer__downside__content__links">
                        <div className="footer__downside__content__links__logo"><FacebookSvg></FacebookSvg></div>
                        <div className="footer__downside__content__links__logo"><TwitterSvg></TwitterSvg></div>
                        <div className="footer__downside__content__links__logo"><InstagramSvg></InstagramSvg></div>
                        <div className="footer__downside__content__links__logo"><InSvg></InSvg></div>
                    </div>
                    <p className="footer__downside__content__contact">Contact Us</p>
                </div>
            </div>
        </footer>
    </div>
  )
}
