import React from 'react'
import About from '../components/About'
import Clients from '../components/Clients'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Journal from '../components/Journal'
import Media from '../components/Media'
import Portfolio from '../components/Portfolio'
import Service from '../components/Service'
import Skills from '../components/Skills'
import HomePage from '../components/Home'
import NavBar from '../components/NavBar'
import Team from '../components/Team'

const Home = () => {
  return (
    <div className='bg-black'>
      <div className="unslate_co--site-inner overflow-x-hidden">
        <div className="lines-wrap">
          <div className="lines-inner">
            <div className="lines"></div>
          </div>
        </div>
        <NavBar />
        <HomePage />
        <Portfolio />
        <Media />
        <About />
        <Service />
        {/* <Clients /> */}
        <Team />
        <Contact />
      </div>
      <Footer />
    </div>
  )
}

export default Home
