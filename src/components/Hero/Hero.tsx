import React from 'react'

import "./Hero.scss"

export default function Hero() {
  return (
    <div>
        <main className="hero">
            <div className="hero__content">
                <div className="hero__description">
                    <p className="hero__description__title">We serve high quality <br></br> foods of     all kinds.</p>
                    <p className="hero__description__additional">Lorem ipsum dolor, sit amet     consectetur adipisicing elit. Voluptatibus ducimus sit pariatur odio ab obcaecati.    </p>
                    <button className="hero__description__menu">View Menu</button>
                </div>
                <div className="hero__schedule">
                    <div className="hero__schedule__item">
                        <p className="hero__schedule__item__title">Opening Times</p>
                        <p className="hero__schedule__item__additional">Sunday to Saturday | 09:00 AM     to 11:00 PM</p>
                    </div>
                    <div className="hero__schedule__item">
                        <p className="hero__schedule__item__title">Location</p>
                        <p className="hero__schedule__item__additional">Master canteen, BBSR , Odisha     752054</p>
                    </div>
                    <div className="hero__schedule__item">
                        <p className="hero__schedule__item__title">Call us</p>
                        <p className="hero__schedule__item__additional">+9776462441</p>
                    </div>
                </div>
            </div>
            <div className="hero__img__div">
                <img src={require("./HeaderImage.png")} alt="CupOfCoffe" className="hero__img"/>
            </div>
        </main>
    </div>
  )
}
