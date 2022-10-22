import React from 'react'
import './Introduction.css'
import { IntroMessage } from '../../components'
import { Gallery } from '../../components'

const Introduction = () => {
  return (
    <div className="intro__container">
      <IntroMessage />
      <Gallery />
    </div>
  )
}

export default Introduction
