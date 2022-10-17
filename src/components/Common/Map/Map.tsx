import React from 'react'

import "./Map.scss"

export default function Map() {
  return (
    <div>
        <main className="map">
            <div className="map__content">
                <div className="map__content__item">
                    <p className="map__content__item__header">Working Hour</p>
                    <div className="map__content__item__additional">
                        <p className="map__content__item__additional__first">Sunday to Saturday  </p>
                        <p className="map__content__item__additional__second"></p>
                    </div>
                </div>
                <div className="map__content__item">
                    <p className="map__content__item__header">Location</p>
                    <div className="map__content__item__additional">
                        <p className="map__content__item__additional__first">Street - 127, New York,</p>
                        <p className="map__content__item__additional__second">United States</p>
                        <p className="map__content__item__additional__third">546544</p>
                    </div>
                </div>
                <div className="map__content__item">
                    <p className="map__content__item__header">Contact us</p>
                    <div className="map__content__item__additional">
                        <p className="map__content__item__additional__first">+123456789</p>
                        <p className="map__content__item__additional__second">hey@yourdomain.com</p>
                    </div>
                </div>
            </div>
            <div className="map__map">
                <img src={require("./Images/Map.png")} alt="map" className="map__map__img"/>
            </div>
        </main>
    </div>
  )
}
