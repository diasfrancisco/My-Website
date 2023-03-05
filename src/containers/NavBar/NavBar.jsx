import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiceD20 } from '@fortawesome/free-solid-svg-icons'
import './NavBar.css'

const Header = () => {
  return (
    <div className="nav_container">
      <a href="/">
        <FontAwesomeIcon className='logo' icon={faDiceD20} />
      </a>
      <ul className='nav_list'>
        <Link to="about">About</Link>
        <Link to="computing">Computing</Link>
        <Link to="art">Art</Link>
        <Link to="science">Science</Link>
      </ul>
    </div>
  )
}

export default Header
