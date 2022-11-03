import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer__container">
      <div>
        <div className="copyright-host">
          <FontAwesomeIcon icon="fa-solid fa-copyright" /> Francisco Dias |
          Hosted on Netlify
        </div>
        <div className="privacy-cookie">Privacy and Cookie policy</div>
      </div>
      <div>
        <div>Art</div>
        <div>Computing</div>
        <div>Science</div>
        <div>About</div>
        <div>Contact</div>
      </div>
      <div>
        <FontAwesomeIcon icon="fa-brands fa-twitter" />
        <FontAwesomeIcon icon="fa-brands fa-instagram" />
        <FontAwesomeIcon icon="fa-brands fa-youtube" />
        <FontAwesomeIcon icon="fa-brands fa-facebook" />
        <FontAwesomeIcon icon="fa-brands fa-linkedin" />
      </div>
    </div>
  )
}

export default Footer
