import React from 'react'
import './ArtImage.css'
import ichigo from '../../assets/images/ichigo-hollow.png'

const ArtImage = () => {
  return (
    <div className='art__container-image'>
      <img src={ichigo} alt="ichigo from bleach" />
    </div>
  )
}

export default ArtImage