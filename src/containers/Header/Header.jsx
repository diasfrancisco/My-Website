import React from 'react'
import './Header.css'
import logo from '../../assets/images/cogwheel-altered.png'

const Header = () => {
  return (
    <div className="header__container">
      <div className="logo__container">
        <img className="logo" src={logo} alt="logo" />
      </div>
      <div className="header__name-container">
        <div className="header__name">Francisco</div>
        <div className="header__name">Dias</div>
      </div>
    </div>
  )
}

export default Header
