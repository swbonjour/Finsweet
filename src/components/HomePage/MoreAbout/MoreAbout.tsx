import React from 'react'

import FlagSvg from './Images/FlagSvg'

import "./MoreAbout.scss"

import MenuButton from '../../../components/Common/MenuButton/MenuButton'

export default function MoreAbout() {
  return (
    <div>
        <main className="about">
            <div className="about__content">
                <p className="about__content__article">KNOW MORE ABOUT US</p>
                <p className="about__content__title">We source sustainable & <br></br>line caught Foods</p>
                <p className="about__content__additional">Edit this text to make it your own. To edit, simply click directly on the text to start adding your own words. You can move the text by dragging and dropping the text anywhere on the page.</p>
                <div className="about__content__enumeration">
                    <div className="about__content__enumeration__item">
                        <p className="about__content__enumeration__item__header"><FlagSvg></FlagSvg>10+ People</p>
                        <p className="about__content__enumeration__item__additional">We are Small Team</p>
                        <p className="about__content__enumeration__item__description">Through True Rich Attended does no end it his mother since favourable.</p>
                    </div>
                    <div className="about__content__enumeration__item">
                        <p className="about__content__enumeration__item__header"><FlagSvg></FlagSvg>2014</p>
                        <p className="about__content__enumeration__item__additional">We are From</p>
                        <p className="about__content__enumeration__item__description">Through True Rich Attended does no end it his mother since favourable.</p>
                    </div>
                    <div className="about__content__enumeration__item">
                        <p className="about__content__enumeration__item__header"><FlagSvg></FlagSvg>200k</p>
                        <p className="about__content__enumeration__item__additional">We Served</p>
                        <p className="about__content__enumeration__item__description">Through True Rich Attended does no end it his mother since favourable.</p>
                    </div>
                </div>
                <MenuButton mt="2rem"></MenuButton>
            </div>
            <div className="about__img">
                <img src={require("./Images/Know more Image 1.png")} alt="chairs" className="about__img__one"/>
                <img src={require("./Images/Know more Image 2.png")} alt="chairs" className="about__img__two"/>
            </div>
        </main>
    </div>
  )
}
