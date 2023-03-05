import React from 'react'
import './Home.css'
import {
  IntroMessage,
  AboutArt,
  AboutComputing,
  AboutScience
} from '../../components'

const Home = () => {
  return (
    <div id='home__container'>
      <div className="intro__container">
        <IntroMessage />
      </div>
      <div className='art-info__container'>
        <AboutArt />
      </div>
      <div className='computinginfo__container'>
        <AboutComputing />
      </div>
      <div className='science-info__container'>
        <AboutScience />
      </div>
    </div>
  )
}

export default Home