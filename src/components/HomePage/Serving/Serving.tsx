import React from 'react'

import "./Serving.scss"

import CakeSvg from './Images/CakeSvg'
import CoffeSvg from './Images/CoffeSvg'
import FoodSvg from './Images/FoodSvg'
import Cocktails from './Images/CocktailsSvg'
import Grill from './Images/GrillSvg'
import Snacks from './Images/SnacksSvg'

export default function Serving() {
  return (
    <div>
        <main className="serving">
            <div className="serving__header">
                <p className="serving__header__article">WHAT WE ARE SERVING</p>
                <div className="serving__header__content">
                    <p className="serving__header__content__title">We all have to eat, so why not <br></br>do it beautifully?</p>
                    <p className="serving__header__content__additional">Through True Rich Attended does no end it his mother since favourable real had half every him case in packages enquire we up ecstatic.. Through True Rich Attended does no end it his mother</p>
                </div>
            </div>
            <div className="serving__content">
                <div className="serving__content__item">
                    <div className="serving__content__item__logo"><CakeSvg></CakeSvg></div>
                    <p className="serving__content__item__title">Quafe Cake</p>
                    <p className="serving__content__item__description">Through True Rich Attended no end it his mother since favourable real had half every him.</p>
                </div>
                <div className="serving__content__item">
                    <div className="serving__content__item__logo"><CoffeSvg></CoffeSvg></div>
                    <p className="serving__content__item__title">Cofee</p>
                    <p className="serving__content__item__description">Through True Rich Attended no end it his mother since favourable real had half every him.</p>
                </div>
                <div className="serving__content__item">
                    <div className="serving__content__item__logo"><FoodSvg></FoodSvg></div>
                    <p className="serving__content__item__title">Fast Food</p>
                    <p className="serving__content__item__description">Through True Rich Attended no end it his mother since favourable real had half every him.</p>
                </div>
                <div className="serving__content__item">
                    <div className="serving__content__item__logo"><Cocktails></Cocktails></div>
                    <p className="serving__content__item__title">Cocktails</p>
                    <p className="serving__content__item__description">Through True Rich Attended no end it his mother since favourable real had half every him.</p>
                </div>
                <div className="serving__content__item">
                    <div className="serving__content__item__logo"><Grill></Grill></div>
                    <p className="serving__content__item__title">Grill</p>
                    <p className="serving__content__item__description">Through True Rich Attended no end it his mother since favourable real had half every him.</p>
                </div>
                <div className="serving__content__item">
                    <div className="serving__content__item__logo"><Snacks></Snacks></div>
                    <p className="serving__content__item__title">Snacks</p>
                    <p className="serving__content__item__description">Through True Rich Attended no end it his mother since favourable real had half every him.</p>
                </div>
            </div>
        </main>
    </div>
  )
}
