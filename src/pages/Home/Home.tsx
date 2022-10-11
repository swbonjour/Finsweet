import React from 'react'

import Hero from '../../components/Hero/Hero'
import MoreAbout from '../../components/MoreAbout/MoreAbout'

import "./Home.scss"

export default function Home() {
  return (
    <div>
        <section className="home">
            <Hero></Hero>
            <MoreAbout></MoreAbout>
        </section>
    </div>
  )
}
