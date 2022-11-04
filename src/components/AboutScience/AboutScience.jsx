import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './AboutScience.css'

const Science = () => {
  return (
    <div className="about-science__container">
      <div className="about-science__title">Science</div>
      <div className="about-science__button-container">
        <Link to="science">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1 }}
            className="about-science__button"
          >
            FIND OUT MORE
          </motion.button>
        </Link>
      </div>
    </div>
  )
}

export default Science
