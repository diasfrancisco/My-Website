import React from 'react'
import './App.css'

function Navbar() {
  return (
    <div id='navbar'>
      <img src='' className='logo' alt='the main logo'></img>
      <div className='navbarContainer'>
        <div>
        <button className='navItem'>Newsletter</button>
        </div>
        <div>
        <button className='navItem'>About</button>
        </div>
        <div>
        <button className='navItem'>Contact</button>
        </div>
        <div>
        <button className='navItem'>Affiliates</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar