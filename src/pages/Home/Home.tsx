import React from 'react'

import Hero from '../../components/Hero/Hero'
import MoreAbout from '../../components/MoreAbout/MoreAbout'
import Serving from '../../components/Serving/Serving'
import Menu from '../../components/Menu/Menu'
import Video from '../../components/Video/Video'
import Blog from '../../components/Blog/Blog'
import Map from '../../components/Map/Map'

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
