import React from 'react'

import "./Blog.scss"

export default function Blog() {
  return (
    <div>
        <main className="blog">
            <div className="blog__header">
                <p className="blog__header__title">Read Our Lastest Blog</p>
            </div>
            <div className="blog__content">
                <div className="blog__content__item">
                    <div className="blog__content__item__text">
                        <p className="blog__content__item__date">21 Jun 2021</p>
                        <p className="blog__content__item__title">Extra Thick Homemad Pizza Sauce</p>
                        <p className="blog__content__item__additional">It is a long established fact that a reader will be distracted by the readable content of a page.</p>
                    </div>
                    <img src={require("./Coffe.png")} alt="coffe" className="blog__content__item__img"/>
                </div>
                <div className="blog__content__item">
                    <div className="blog__content__item__text">
                        <p className="blog__content__item__date">21 Jun 2021</p>
                        <p className="blog__content__item__title">The Best Way to Store Fresh Herbs</p>
                        <p className="blog__content__item__additional">It is a long established fact that a reader will be distracted by the readable content of a page.</p>
                    </div>
                    <img src={require("./Burger.png")} alt="burger" className="blog__content__item__img"/>
                </div>
                <div className="blog__content__item">
                    <div className="blog__content__item__text">
                        <p className="blog__content__item__date">21 Jun 2021</p>
                        <p className="blog__content__item__title">5 ways to prepare porridge</p>
                        <p className="blog__content__item__additional">It is a long established fact that a reader will be distracted by the readable content of a page.</p>
                    </div>
                    <img src={require("./Sandwitch.png")} alt="sandwitch" className="blog__content__item__img"/>
                </div>
            </div>
        </main>
    </div>
  )
}
