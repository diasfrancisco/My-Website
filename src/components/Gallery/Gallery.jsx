import React from 'react'
import './Gallery.css'
import itachi from '../../assets/images/itachi-main.png'

const Gallery = () => {
  return (
    <div className='gallery'>
      <img src={itachi} alt="Itachi from Naruto" />
    </div>
  )
}

export default Gallery