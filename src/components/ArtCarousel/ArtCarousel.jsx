import React from 'react'
import { motion } from 'framer-motion'
import { cavewolf } from '../../assets/images/cave-wolf.jpg'
import './ArtMarquee.css'

const marqueeVariant = {
  animate: {
    y: [0, -1035],
    transition: {
      y: {
        repeat: Infinity,
        repeatType: 'loop',
        duration: 5,
        ease: 'linear',
      },
    },
  },
}

const ArtMarquee = () => {
  return (
    <div>
      <div className="marquee">
        <motion.div
          className="track"
          variants={marqueeVariant}
          animate="animate"
        >
          <img src={cavewolf} alt="image 1" />
        </motion.div>
      </div>
    </div>
  )
}

export default ArtMarquee
