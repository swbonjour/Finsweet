import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Burger.scss";

export default function Burger() {
  const [openBurger, setOpenBurger] = useState(false);

  function openBurgerMenu() {
    setOpenBurger(!openBurger);
  }

  if (!openBurger) {
    return (
      <div>
        <div className="burger" onClick={openBurgerMenu}>
          <div className="burger__line__one"></div>
          <div className="burger__line__two"></div>
          <div className="burger__line__three"></div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="burger" onClick={openBurgerMenu}>
          <div className="burger__line__one__rotated"></div>
          <div className="burger__line__two__rotated"></div>
          <div className="burger__line__three__rotated"></div>
        </div>
        <div className="burger__nav">
            <div className="burger__nav__item"><Link to="/" className="burger__nav__item__link">Home</Link></div>
            <div className="burger__nav__item"><Link to="/menu" className="burger__nav__item__link">Menu</Link></div>
            <div className="burger__nav__item"><Link to="/about" className="burger__nav__item__link">About Us</Link></div>
            <div className="burger__nav__item"><Link to="/story" className="burger__nav__item__link">Our Story</Link></div>
            <div className="burger__nav__item"><Link to="/blog" className="burger__nav__item__link">Blog</Link></div>
            <div className="burger__nav__item"><Link to="/contact" className="burger__nav__item__link">Contact</Link></div>
          </div>
      </div>
    )
  }
}
