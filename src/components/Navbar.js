import React from 'react'
import './App.css'

function Navbar() {
  return (
    <div id='navbar'>
      <img src='' className='logo' alt='the main logo'></img>
      <div className='navbarContainer'>
          <button className='navItem'>Newsletter</button>
          <button className='navItem'>About</button>
          <button className='navItem'>Contact</button>
          <button className='navItem'>Affiliates</button>
      </div>
    </div>
  )
}

export default Navbar