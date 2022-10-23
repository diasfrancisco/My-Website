import React from 'react'
import './IntroMessage.css'

const IntroMessage = () => {
  return (
    <div className='intro__message-container'>
      <div className='intro__message'>Artist</div>
      <div className='intro__message' id='intro__location'>UK</div>
    </div>
  )
}

export default IntroMessage