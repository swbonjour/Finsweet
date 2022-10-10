import React, { useState } from "react";

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
            <div className="burger__nav__item"><a href="#" className="burger__nav__item__link">Home</a></div>
            <div className="burger__nav__item"><a href="#" className="burger__nav__item__link">Menu</a></div>
            <div className="burger__nav__item"><a href="#" className="burger__nav__item__link">About Us</a></div>
            <div className="burger__nav__item"><a href="#" className="burger__nav__item__link">Our Story</a></div>
            <div className="burger__nav__item"><a href="#" className="burger__nav__item__link">Blog</a></div>
            <div className="burger__nav__item"><a href="#" className="burger__nav__item__link">Contact</a></div>
          </div>
      </div>
    )
  }
}
