import React from 'react'
import './ComputingInfo.css'
import { AboutComputing, ComputingImage } from '../../components'

const ComputingInfo = () => {
  return (
    <div className='computinginfo__container'>
      <AboutComputing />
      <ComputingImage />
    </div>
  )
}

export default ComputingInfo