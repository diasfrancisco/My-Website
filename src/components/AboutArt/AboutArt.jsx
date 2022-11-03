import React from 'react'
import './AboutArt.css'
import { motion } from 'framer-motion'

const AboutArt = () => {
  return (
    <div className="about-art__container">
      <div className="about-art__title">Art</div>
      <div className='about-art__button-container'>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1 }}
          className="about-art__button"
        >
          FIND OUT MORE
        </motion.button>
      </div>
    </div>
  )
}

export default AboutArt
