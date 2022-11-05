import React from 'react'
import './Home.css'
import {
  ArtInfo,
  ComputingInfo,
  Introduction,
  ScienceInfo,
} from '../../containers'

const Home = () => {
  return (
    <div id='home__container'>
      <Introduction />
      <ArtInfo />
      <ComputingInfo />
      <ScienceInfo />
    </div>
  )
}

export default Home
