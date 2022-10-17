import React, { useEffect, useState } from "react";

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
                <a href="#" className="header__nav__ul__item__link">
                  Home
                </a>
              </li>
              <li className="header__nav__ul__item">
                <a href="#" className="header__nav__ul__item__link">
                  Menu
                </a>
              </li>
              <li className="header__nav__ul__item">
                <a href="#" className="header__nav__ul__item__link">
                  About Us
                </a>
              </li>
              <li className="header__nav__ul__item">
                <a href="#" className="header__nav__ul__item__link">
                  Our Story
                </a>
              </li>
              <li className="header__nav__ul__item">
                <a href="#" className="header__nav__ul__item__link">
                  Blog
                </a>
              </li>
              <li className="header__nav__ul__item">
                <a href="#" className="header__nav__ul__item__link">
                  Contact
                </a>
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
