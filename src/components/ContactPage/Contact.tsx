import React from 'react'

import "./Contact.scss"

import Map from '../Common/Map/Map'

export default function Contact() {
  return (
    <div>
        <main className="contact">
            <div className="contact__content">
                <p className="contact__content__header">Have a Question ?<br></br> Get in Touch with us 👋</p>
                <p className="contact__content__additional">Fill up the Form  and ou team will get back to within 24 hrs</p>
                <form action="post" className="contact__content__form">
                    <div className="contact__content__form__data">
                        <input type="text" className="contact__content__form__data__name" placeholder="Name"/>
                        <input type="text" className="contact__content__form__data__email" placeholder="Email"/>
                    </div>
                    <input type="text" className="contact__content__form__message" placeholder="Message"/>
                    <button className="contact__content__form__button">Send Messege</button>
                </form>
            </div>
            <div className="contact__img">
                <img src={require("./Image/Contact Image 1.png")} alt="chairs" className="contact__img__one"/>
                <img src={require("./Image/Contact Image 2.png")} alt="coffe" className="contact__img__two"/>
            </div>
        </main>
        <Map></Map>
    </div>
  )
}
