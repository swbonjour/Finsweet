import React from 'react'

import "./Blog.scss"
import Map from '../Common/Map/Map'

export default function Blog() {
  return (
    <div>
        <main className="blog">
            <p className="blog__header">Featured Blogs</p>
            <div className="blog__blogs">
                <div className="blog__blogs__main">
                    <img src={require("./Image/BG.png")} alt="bg" className="blog__blogs__main__img"/>
                    <div className="blog__blogs__main__trending"><p className="blog__blogs__main__trending__text">TRENDING</p></div>
                    <div className="blog__blogs__main__content">
                        <div className="blog__blogs__main__content__header">A guide to Thai Curry</div>
                        <div className="blog__blogs__main__content__profile">
                            <div className="blog__blogs__main__content__profile__wrapper">
                                <div className="blog__blogs__main__content__profile__img"><img src={require("./Image/Profile.png")} alt="avatar" /></div>
                                <div className="blog__blogs__main__content__profile__text">
                                <div className="blog__blogs__main__content__profile__name">Andrew Jonson</div>
                                <div className="blog__blogs__main__content__profile__date">27th January 2021</div>
                            </div>
                            </div>
                                <div className="blog__blogs__main__content__more"><p className="blog__blogs__main__content__more__text">Read More</p></div>
                            </div>
                        </div>
                </div>
                <div className="blog__blogs__additional">
                    <div className="blog__blogs__additional__item">
                        <div className="blog__blogs__additional__item__img"><img src={require("./Image/Woman.png")} alt="woman" /></div>
                        <div className="blog__blogs__additional__item__content">
                            <div className="blog__blogs__additional__item__header">You can move the text by dragging and dropping the text </div>
                            <div className="blog__blogs__additional__item__additional">Writing UX copies can be a little frustrating and confusing, and sometimes </div>
                        </div>
                    </div>
                    <div className="blog__blogs__additional__item">
                        <div className="blog__blogs__additional__item__img"><img src={require("./Image/Coffe.png")} alt="coffe" /></div>
                        <div className="blog__blogs__additional__item__content">
                            <div className="blog__blogs__additional__item__header">Edit this text to make it your own. To edit, simply </div>
                            <div className="blog__blogs__additional__item__additional">Writing UX copies can be a little frustrating and confusing, and sometimes </div>
                        </div>
                    </div>
                    <div className="blog__blogs__additional__item">
                        <div className="blog__blogs__additional__item__img"><img src={require("./Image/Cook.png")} alt="cook" /></div>
                        <div className="blog__blogs__additional__item__content">
                            <div className="blog__blogs__additional__item__header">You can move the text by dragging and dropping the text </div>
                            <div className="blog__blogs__additional__item__additional">Writing UX copies can be a little frustrating and confusing, and sometimes </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <div className="blog__article">
            <p className="blog__article__header">All Articles</p>
            <div className="blog__article__content">
                <div className="blog__article__content__item">
                    <img src={require("./Image/Bar.png")} alt="bar" />
                    <div className="blog__article__content__item__profile__text">
                        <div className="blog__article__content__item__profile">
                            <img src={require("./Image/Profile.png")} alt="profile" className="blog__article__content__item__profile__img"/>
                            <div className="blog__article__content__item__profile__data">
                                <div className="blog__article__content__item__profile__name">Andrew Jonson</div>
                                <div className="blog__article__content__item__profile__date">27th January 2021</div>
                            </div>
                        </div>
                        <p className="blog__article__content__item__header">A guide to Thai     Curry</p>
                        <p className="blog__article__content__item__more">Read More</p>
                    </div>
                </div>
                <div className="blog__article__content__item">
                    <img src={require("./Image/Chair.png")} alt="bar" />
                    <div className="blog__article__content__item__profile__text">
                        <div className="blog__article__content__item__profile">
                            <img src={require("./Image/Profile.png")} alt="profile" className="blog__article__content__item__profile__img"/>
                            <div className="blog__article__content__item__profile__data">
                                <div className="blog__article__content__item__profile__name">Andrew Jonson</div>
                                <div className="blog__article__content__item__profile__date">27th January 2021</div>
                            </div>
                        </div>
                        <p className="blog__article__content__item__header">The best guacamole recipe with only 4 ingredients</p>
                        <p className="blog__article__content__item__more">Read More</p>
                    </div>
                </div>
                <div className="blog__article__content__item">
                    <img src={require("./Image/Table.png")} alt="bar" />
                    <div className="blog__article__content__item__profile__text">
                        <div className="blog__article__content__item__profile">
                            <img src={require("./Image/Profile.png")} alt="profile" className="blog__article__content__item__profile__img"/>
                            <div className="blog__article__content__item__profile__data">
                                <div className="blog__article__content__item__profile__name">Andrew Jonson</div>
                                <div className="blog__article__content__item__profile__date">27th January 2021</div>
                            </div>
                        </div>
                        <p className="blog__article__content__item__header">The best guacamole recipe with only 4 ingredients</p>
                        <p className="blog__article__content__item__more">Read More</p>
                    </div>
                </div>
                <div className="blog__article__content__item">
                    <img src={require("./Image/Table.png")} alt="bar" />
                    <div className="blog__article__content__item__profile__text">
                        <div className="blog__article__content__item__profile">
                            <img src={require("./Image/Profile.png")} alt="profile" className="blog__article__content__item__profile__img"/>
                            <div className="blog__article__content__item__profile__data">
                                <div className="blog__article__content__item__profile__name">Andrew Jonson</div>
                                <div className="blog__article__content__item__profile__date">27th January 2021</div>
                            </div>
                        </div>
                        <p className="blog__article__content__item__header">The best guacamole recipe with only 4 ingredients</p>
                        <p className="blog__article__content__item__more">Read More</p>
                    </div>
                </div>
            </div>
        </div>
        <Map></Map>
    </div>
  )
}
