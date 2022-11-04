import React from 'react'
import './Header.css'
import logo from '../../assets/images/gear-solid.svg'

const Header = () => {
  return (
    <div className="header__container">
      <a href="/">
        <img className="logo" src={logo} alt="logo" />
      </a>
      <div className="header-name__container">
        <div className="header-name">Francisco</div>
        <div className="header-name">Dias</div>
      </div>
    </div>
  )
}

export default Header
