import React from 'react'

import "./Menu.scss"

import MenuButton from '../../../components/Common/MenuButton/MenuButton'

export default function Menu() {
  return (
    <div>
        <main className="menu">
            <div className="menu__header">
                <p className="menu__header__article">OUR MENU</p>
                <div className="menu__header__content">
                    <p className="menu__header__content__title">Discover our menu <br></br>chart</p>
                    <p className="menu__header__content__additional">Through True Rich Attended does no end it his mother since favourable real had half every him case in packages enquire we up ecstatic.. Through True Rich Attended does no end it his mother</p>
                </div>
            </div>
            <div className="menu__content">
                <div className="menu__content__item">
                    <img src={require("./Images/Coffe.png")} alt="coffe" className="menu__content__item__img"/>
                    <div className="menu__content__item__card">
                        <p className="menu__content__item__card__title">Drp Cofee</p>
                        <p className="menu__content__item__card__price">$08.85</p>
                    </div>
                </div>
                <div className="menu__content__item">
                    <img src={require("./Images/CupCake.png")} alt="cupcake" className="menu__content__item__img"/>
                    <div className="menu__content__item__card">
                        <p className="menu__content__item__card__title">Choco Cup Cake</p>
                        <p className="menu__content__item__card__price">$4.85</p>
                    </div>
                </div>
                <div className="menu__content__item">
                    <img src={require("./Images/Burger.png")} alt="burger" className="menu__content__item__img"/>
                    <div className="menu__content__item__card">
                        <p className="menu__content__item__card__title">Chicken Burger</p>
                        <p className="menu__content__item__card__price">$8.85</p>
                    </div>
                </div>
                <div className="menu__content__item">
                    <img src={require("./Images/Fries.png")} alt="fries" className="menu__content__item__img"/>
                    <div className="menu__content__item__card">
                        <p className="menu__content__item__card__title">French Fries</p>
                        <p className="menu__content__item__card__price">$7.85</p>
                    </div>
                </div>
                <div className="menu__content__item">
                    <img src={require("./Images/Sandwitch.png")} alt="sandwitch" className="menu__content__item__img"/>
                    <div className="menu__content__item__card">
                        <p className="menu__content__item__card__title">Sandwitch</p>
                        <p className="menu__content__item__card__price">$3.97</p>
                    </div>
                </div>
                <div className="menu__content__item">
                    <img src={require("./Images/Soup.png")} alt="soup" className="menu__content__item__img"/>
                    <div className="menu__content__item__card">
                        <p className="menu__content__item__card__title">Chinese Soup</p>
                        <p className="menu__content__item__card__price">$8.85</p>
                    </div>
                </div>
            </div>
            <MenuButton mt="2rem" ml="50%" translateX="-50%"></MenuButton>
        </main>
    </div>
  )
}
