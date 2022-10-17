import React, { ReactElement } from 'react'

import "./Menu.scss"

import Map from '../Common/Map/Map'

export default function Menu() {

    const changeActive = (event: any) => {
       event.currentTarget.classList.add("menu__choose__item__active")
       
       let sibling = event.currentTarget.parentNode?.firstElementChild

       while(sibling) {
        if(sibling != event.currentTarget) {
            sibling.classList.remove("menu__choose__item__active")
        }
        sibling = sibling?.nextElementSibling
       }
    }
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
            <div className="menu__choose">
                <p className="menu__choose__item menu__choose__item__active" onClick={changeActive}>All</p>
                <p className="menu__choose__item" onClick={changeActive}>Fast Food</p>
                <p className="menu__choose__item" onClick={changeActive}>Coffe</p>
                <p className="menu__choose__item" onClick={changeActive}>Cocktails</p>
                <p className="menu__choose__item" onClick={changeActive}>Quafe Cake</p>
                <p className="menu__choose__item" onClick={changeActive}>Snacks</p>
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
            <Map></Map>
        </main>
    </div>
  )
}