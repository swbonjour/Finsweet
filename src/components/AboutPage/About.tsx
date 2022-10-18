import React from 'react'

import "./About.scss"

import MenuButton from '../Common/MenuButton/MenuButton'
import FlagSvg from '../HomePage/MoreAbout/Images/FlagSvg'
import Map from '../Common/Map/Map'

export default function About() {
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
        <div className="about__new__york">
                <img src={require("./Images/NewYork.png")} alt="New York" className="about__new__york__img"/>
        </div>
        <div className="about__history">
            <p className="about__history__header">Our History</p>
            <div className="about__history__line">
                <div className="about__history__line__orange__one"></div>
                <div className="about__history__line__orange__two"></div>
                <div className="about__history__line__orange__three"></div>
                <div className="about__history__line__orange__four"></div>
            </div>
            <div className="about__history__content">
                <div className="about__history__content__item">
                    <p className="about__history__content__item__date">1998</p>
                    <p className="about__history__content__item__header">Milestone One</p>
                    <p className="about__history__content__item__additional">Through True Rich Attended does no end it his mother since favourable.</p>
                </div>
                <div className="about__history__content__item">
                    <p className="about__history__content__item__date">2005</p>
                    <p className="about__history__content__item__header">Milestone Two</p>
                    <p className="about__history__content__item__additional">Through True Rich Attended does no end it his mother since favourable.</p>
                </div>
                <div className="about__history__content__item">
                    <p className="about__history__content__item__date">2012</p>
                    <p className="about__history__content__item__header">Milestone Three</p>
                    <p className="about__history__content__item__additional">Through True Rich Attended does no end it his mother since favourable.</p>
                </div>
                <div className="about__history__content__item">
                    <p className="about__history__content__item__date">2021</p>
                    <p className="about__history__content__item__header">Milestone Four</p>
                    <p className="about__history__content__item__additional">Through True Rich Attended does no end it his mother since favourable.</p>
                </div>
            </div>
        </div>
        <div className="about__company">
            <div className="about__company__header">Things our company<br></br> stands for</div>
            <div className="about__company__content">
                <div className="about__company__content__header">Edit this text to make it your own. To edit, simply click directly</div>
                <div className="about__company__content__additional">Writing UX copies can be a little frustrating and confusing, and sometimes we are unsure about how to get the right word. To crack the code for the UX copies, we at Zeta Design wanted to build a Figma plugin for the larger design community. The plugin is called the Ghost UXWriter and has a set of UX copies cataloged and categorized with a voice and tone variation ranging from plain, casual to playful. The intention to build this Figma plugin originated from our Medium blog post, `Designing voice and tone for error messages.</div>
            </div>
        </div>
        <Map></Map>
    </div>
  )
}
