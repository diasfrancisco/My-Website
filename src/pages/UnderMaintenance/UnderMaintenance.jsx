import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHelmetSafety } from '@fortawesome/free-solid-svg-icons'
import './UnderMaintenance.css'

const UnderMaintenance = () => {
  return (
    <div className="maintenance__container">
      <div className='helmet-icon'>
        <FontAwesomeIcon icon={faHelmetSafety}></FontAwesomeIcon>
      </div>
      <div className="maintenance-message">
        <div>Page is under maintenance</div>
        <div>Sorry for the inconvenience!</div>
      </div>
    </div>
  )
}

export default UnderMaintenance
