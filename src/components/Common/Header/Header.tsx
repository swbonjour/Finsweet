import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./Header.scss";

import Burger from "./Burger/Burger";

export default function Header() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  window.addEventListener("resize", () => {
    setWindowWidth(window.innerWidth);
  });

  useEffect(() => {}, [windowWidth]);

  if (windowWidth >= 1400) {
    return (
      <div style={{width: "100%", position: "fixed", left: 0, top: 0, height: "5rem", backgroundColor: "#19161B", zIndex: 99}}>
        <header className="header">
          <nav className="header__nav">
            <ul className="header__nav__ul">
              <div className="header__logo">{"{"}Finsweet</div>
              <li className="header__nav__ul__item">
                <Link to="/" className="header__nav__ul__item__link">
                  Home
                </Link>
              </li>
              <li className="header__nav__ul__item">
                <Link to="/menu" className="header__nav__ul__item__link">
                  Menu
                </Link>
              </li>
              <li className="header__nav__ul__item">
                <Link to="/about" className="header__nav__ul__item__link">
                  About Us
                </Link>
              </li>
              <li className="header__nav__ul__item">
                <Link to="/story" className="header__nav__ul__item__link">
                  Our Story
                </Link>
              </li>
              <li className="header__nav__ul__item">
                <Link to="/blog" className="header__nav__ul__item__link">
                  Blog
                </Link>
              </li>
              <li className="header__nav__ul__item">
                <Link to="/contact" className="header__nav__ul__item__link">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    );
  } else {
    return (
      <div style={{width: "100%", position: "fixed", left: 0, top: 0, height: "5rem", backgroundColor: "#19161B", zIndex: 99}}>
        <header className="header">
          <div className="header__logo">{"{"}Finsweet</div>
          <Burger></Burger>
        </header>
      </div>
    )
  }
}
