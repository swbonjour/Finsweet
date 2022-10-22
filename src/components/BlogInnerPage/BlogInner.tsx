import React from 'react'

import "./BlogInner.scss"

import Map from '../Common/Map/Map'

export default function BlogInner() {
  return (
    <div>
        <main className="blog__inner">
            <div className="blog__inner__profile">
                <div className="blog__inner__profile__content">
                    <img src={require("./Image/Profile.png")} alt="profile" className="blog__inner__profile__content__img"/>
                    <div className="blog__inner__profile__content__name">Andrew Jonson</div>
                </div>
                <div className="blog__inner__profile__date">Posted on 27th January 2021</div>
            </div>
            <p className="blog__inner__header">How to store Tomatoes (and Whether to Refrigerate Them)</p>
            <img src={require("./Image/BlogImage.png")} alt="blog" className="blog__inner__img"/>
            <div className="blog__inner__content">
              <p className="blog__inner__content__header">Edit this text to make it your own. To edit, simply click directly on the text.</p>
              <p className="blog__inner__content__text">Writing UX copies can be a little frustrating and confusing, and sometimes we are unsure about how to get the right word. To crack the code for the UX copies, we at Zeta Design wanted to build a Figma plugin for the larger design community. The plugin is called the Ghost UXWriter and has a set of UX copies cataloged and categorized with a voice and tone variation ranging from plain, casual to playful. The intention to build this Figma plugin originated from our Medium blog post, `Designing voice and tone for error messages.</p>
              <p className="blog__inner__content__text">Writing UX copies can be a little frustrating and confusing, and sometimes we are unsure about how to get the right word. To crack the code for the UX copies, we at Zeta Design wanted to build a Figma plugin for the larger design community. The plugin is called the Ghost UXWriter and has a set of UX copies cataloged.</p>
              <p className="blog__inner__content__text">Writing UX copies can be a little frustrating and confusing, and sometimes we are unsure about how to get the right word. To crack the code for the UX copies, we at Zeta Design wanted to build a Figma plugin for the larger design community. The plugin is called the Ghost UXWriter and has a set of UX copies cataloged.</p>
              <p className="blog__inner__content__text">Writing UX copies can be a little frustrating and confusing, and sometimes we are unsure about how to get the right word. To crack the code for the UX copies, we at Zeta Design wanted to build a Figma plugin for the larger design community. The plugin is called the Ghost UXWriter and has a set of UX copies cataloged and categorized with a voice and tone variation ranging from plain, casual to playful. The intention to build this Figma plugin originated from our Medium blog post, `Designing voice.</p>
              <p className="blog__inner__content__header__additional">Transform Your Idea Into Reality with Ether a Leading Digital Agency</p>
              <div className="blog__inner__content__steps">
                <p className="blog__inner__content__steps_step">Step 1: Download the plugin from Figma community, search Ghost UXWriter</p>
                <p className="blog__inner__content__steps_step">Step 2: Open the plugin on your artboard</p>
                <p className="blog__inner__content__steps_step">Step 3: Search for your copy or look through the different categories of the copies</p>
                <p className="blog__inner__content__steps_step">Step 4: Select the type of error you are looking for. You will get three different copies for each error</p>
                <p className="blog__inner__content__steps_step">Step 5: Tap on the cards to insert text in your frames</p>
                <p className="blog__inner__content__steps_step">And you are all geared up to make your UX copies more fun and exciting 😎</p>
              </div>
              <p className="blog__inner__content__header__footer">Your own words. You can move the text by dragging and dropping the text anywhere on the page. </p>
              <p className="blog__inner__content__text__footer">Writing UX copies can be a little frustrating and confusing, and sometimes we are unsure about how to get the right word. To crack the code for the UX copies, we at Zeta Design wanted to build a Figma plugin for the larger design community. The plugin is called the Ghost UXWriter and has a set of UX copies cataloged and categorized with a voice and tone variation ranging from plain, casual to playful. The intention to build this Figma plugin originated from our Medium blog post, ` Designing voice and tone for error messages.</p>
            </div>
        </main>
        <Map></Map>
    </div>
  )
}
