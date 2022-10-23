import React from 'react'
import './ScienceInfo.css'
import { AboutScience, ScienceImage } from '../../components'

const ScienceInfo = () => {
  return (
    <div className='scienceinfo__container'>
      <ScienceImage />
      <AboutScience />
    </div>
  )
}

export default ScienceInfo