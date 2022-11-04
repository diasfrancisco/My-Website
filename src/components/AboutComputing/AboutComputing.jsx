import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './AboutComputing.css'

const Computing = () => {
  return (
    <div className="about-computing__container">
      <div className="about-computing__title">Computing</div>
      <div className="about-computing__button-container">
        <Link to="computing">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1 }}
            className="about-computing__button"
          >
            FIND OUT MORE
          </motion.button>
        </Link>
      </div>
    </div>
  )
}

export default Computing
