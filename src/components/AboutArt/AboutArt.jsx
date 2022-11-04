import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './AboutArt.css'

const AboutArt = () => {
  return (
    <div className="about-art__container">
      <div className="about-art__title">Art</div>
      <div className="about-art__button-container">
        <Link to="art">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1 }}
            className="about-art__button"
          >
            FIND OUT MORE
          </motion.button>
        </Link>
      </div>
    </div>
  )
}

export default AboutArt
