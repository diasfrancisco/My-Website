import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-regular-svg-icons'
import {
  faTwitter,
  faInstagram,
  faYoutube,
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'
import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="footer__container">
      <div className="policy__container">
        <div className="copyright-host">
          <FontAwesomeIcon icon={faCopyright}></FontAwesomeIcon> Francisco Dias
          | Hosted on <a href="https://www.netlify.com/" className='netlify-link'>Netlify</a>
        </div>
        <div className="privacy-cookie">Privacy and Cookie policy</div>
      </div>
      <div className="all-links__container">
        <Link to="art" className="page-link">
          Art
        </Link>
        <Link to="computing" className="page-link">
          Computing
        </Link>
        <Link to="science" className="page-link">
          Science
        </Link>
        <Link to="about" className="page-link">
          About
        </Link>
        <Link to="contact" className="page-link">
          Contact
        </Link>
      </div>
      <div className="social-media-icons__container">
        <FontAwesomeIcon
          icon={faTwitter}
          className="social-icon"
          id="twitter-icon"
        ></FontAwesomeIcon>
        <FontAwesomeIcon
          icon={faInstagram}
          className="social-icon"
          id="instagram-icon"
        ></FontAwesomeIcon>
        <FontAwesomeIcon
          icon={faYoutube}
          className="social-icon"
          id="youtube-icon"
        ></FontAwesomeIcon>
        <FontAwesomeIcon
          icon={faLinkedin}
          className="social-icon"
          id="linkedin-icon"
        ></FontAwesomeIcon>
        <FontAwesomeIcon
          icon={faGithub}
          className="social-icon"
          id="github-icon"
        ></FontAwesomeIcon>
      </div>
    </div>
  )
}

export default Footer
