import React from 'react'
import './PageNotFound.css'

const PageNotFound = () => {
  return (
    <>
    <div className='error__message-container'>
        <div className='error__message'>404</div>
        <div className='error__message'>Page Not Found</div>
    </div>
    </>
  )
}

export default PageNotFound