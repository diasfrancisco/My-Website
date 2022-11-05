import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiceD20 } from '@fortawesome/free-solid-svg-icons'
import './Header.css'

const Header = () => {
  return (
    <div className="header__container">
      <a href="/">
        <FontAwesomeIcon className='logo' icon={faDiceD20} />
      </a>
      <div className="header-name__container">
        <div className="header-name">Francisco</div>
        <div className="header-name">Dias</div>
      </div>
    </div>
  )
}

export default Header
