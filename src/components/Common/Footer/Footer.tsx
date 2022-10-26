import React from 'react'
import { Link } from 'react-router-dom'

import "./Footer.scss"

import FacebookSvg from './Images/FacebookSvg'
import TwitterSvg from './Images/TwitterSvg'
import InstagramSvg from './Images/InstagramSvg'
import InSvg from './Images/InSvg'

export default function Footer() {
  return (
    <div>
        <footer className="footer">
            <div className="footer__logo">{"{"}Finsweet</div>
            <nav className="footer__nav">
                <div className="footer__nav__ul">
                    <Link to="/Finsweet" className="footer__nav__ul__item__link"><li className="footer__nav__ul__item">Home</li></Link>
                    <Link to="/Finsweet/menu" className="footer__nav__ul__item__link"><li className="footer__nav__ul__item">Menu</li></Link>
                    <Link to="/Finsweet/about" className="footer__nav__ul__item__link"><li className="footer__nav__ul__item">About Us</li></Link>
                    <Link to="/Finsweet/story" className="footer__nav__ul__item__link"><li className="footer__nav__ul__item">Our Story</li></Link>
                    <Link to="/Finsweet/blog" className="footer__nav__ul__item__link"><li className="footer__nav__ul__item">Blog</li></Link>
                    <Link to="/Finsweet/contact" className="footer__nav__ul__item__link"><li className="footer__nav__ul__item">Contact us</li></Link>
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
