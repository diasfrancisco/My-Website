import React from 'react'
import { motion } from 'framer-motion'
import './AboutScience.css'

const Science = () => {
  return (
    <div className="about-science__container">
      <div className="about-science__title">Science</div>
      <div className='about-science__button-container'>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1 }}
          className="about-science__button"
        >
          FIND OUT MORE
        </motion.button>
      </div>
    </div>
  )
}

export default Science
