import React from 'react'

import "./Video.scss"

import "./BracketsSvg"
import BracketsSvg from './BracketsSvg'

export default function Video() {
  return (
    <div>
        <main className="video">
            <div className="video__content">
                <div className="video__content__breackets"><BracketsSvg></BracketsSvg></div>
                <div className="video__content__text">Edit this text to make it your own. To edit, simply click directly on the text to start adding your own words. You can move the text by dragging and dropping the text</div>
                <div className="video__content__portfolio">
                    <div className="video__content__portfolio__contact">
                            <p className="video__content__portfolio__contact__name">Joheny Andro</p>
                            <p className="video__content__portfolio__contact__city">Bhubaneswar, Odisha</p>
                    </div>
                    <div className="video__content__portfolio__img">
                            <img src={require("./Avatar.png")} alt="avatar" />
                    </div>
                </div>
                <div className="video__content__portfolio__line"></div>
            </div>
            <div className="video__video">
                <img src={require("./Video.png")} alt="video" className="video__video__img"/>
            </div>
        </main>
    </div>
  )
}
