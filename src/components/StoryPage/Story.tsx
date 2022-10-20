import React from 'react'

import "./Story.scss"

import Map from '../Common/Map/Map'

export default function Story() {
  return (
    <div>
        <main className="story">
            <div className="story__content">
                <p className="story__content__header">Our Story</p>
                <div className="story__content__additional">Through True Rich Attended does no end it his mother since favourable real had half every him case in packages enquire we up ecstatic.</div>
                <div className="story__content__img">
                    <img src={require("./Image/Image 1.png")} alt="autumn" className="story__content__img__one"/>
                    <img src={require("./Image/Image 2.png")} alt="autumn" className="story__content__img__two"/>
                </div>
            </div>
            <div className="story__text">
                <p className="story__text__header">One of the best cafes in <span>New York.</span></p>
                <div className="story__text__additional">Writing UX copies can be a little frustrating and confusing, and sometimes we are unsure about how to get the right word. To crack the code for the UX copies, we at Zeta Design wanted to build a Figma plugin for the larger design community. The plugin is called the Ghost UXWriter and has a set of UX copies cataloged and categorized with a voice and tone variation ranging from plain, casual to playful. The intention to build this Figma plugin originated from our Medium blog post, `Designing voice and tone for error messages.</div>
                <div className="story__text__additional__two">Writing UX copies can be a little frustrating and confusing, and sometimes we are unsure about how to get the right word. To crack the code for the UX copies, we at Zeta Design wanted to build a Figma plugin for the larger design community. The plugin is called the Ghost UXWriter and has a set of UX copies cataloged and categorized with a voice and tone variation ranging from plain, casual to playful. The intention to build this Figma plugin originated from our Medium blog post, `Designing voice.</div>
            </div>
        </main>
        <Map></Map>
    </div>
  )
}
