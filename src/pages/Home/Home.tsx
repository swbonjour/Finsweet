import React from 'react'

import Hero from '../../components/HomePage/Hero/Hero'
import MoreAbout from '../../components/HomePage/MoreAbout/MoreAbout'
import Serving from '../../components/HomePage/Serving/Serving'
import Menu from '../../components/HomePage/Menu/Menu'
import Video from '../../components/HomePage/Video/Video'
import Blog from '../../components/HomePage/Blog/Blog'
import Map from '../../components/Common/Map/Map'

import "./Home.scss"

export default function Home() {
  return (
    <div>
        <section className="home">
            <Hero></Hero>
            <MoreAbout></MoreAbout>
            <Serving></Serving>
            <Menu></Menu>
            <Video></Video>
            <Blog></Blog>
            <Map></Map>
        </section>
    </div>
  )
}
