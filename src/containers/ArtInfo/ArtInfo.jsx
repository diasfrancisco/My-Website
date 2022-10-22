import React from 'react'
import './ArtInfo.css'

import { ArtImage, AboutArt } from '../../components'

const ArtInfo = () => {
  return (
    <div className='artinfo__container'>
      <ArtImage />
      <AboutArt />
    </div>
  )
}

export default ArtInfo
