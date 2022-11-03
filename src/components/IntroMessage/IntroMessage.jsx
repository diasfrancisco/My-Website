import React from 'react'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import './IntroMessage.css'

const professions = ['Artist', 'Machine Learning Engineer', 'Biochemist']

const IntroMessage = () => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const tick = () => setIndex((i) => i + 1)

    const id = setInterval(tick, 3000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="intro-message__container">
      <motion.div
        animate={{
          x: ['-100%', '0%', '0%', '-100%'],
        }}
        transition={{
          duration: 3,
          times: [0, 0.2, 0.8, 1],
          repeat: Infinity,
        }}
        className="intro__message"
      >
        {professions[index % professions.length]}
      </motion.div>
      <div className="intro__message" id="intro__location">
        UK
      </div>
    </div>
  )
}

export default IntroMessage
