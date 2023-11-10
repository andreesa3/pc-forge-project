import { Link } from "react-router-dom"

/* Images */
import logo from '../assets/icons/logo.svg'

import '../style/nav.css'
import '../style/footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="footer-wrapper wrapper">
        {/* Footer Top */}
        {/* Contacts */}
        <div className="footer-content-box">
          <div className="footer-text-box">
            {/* Logo */}
            <Link to='/'>
              <div className="logo">
                <img src={logo} alt="logo" />
                <h3><span className="purple">PC</span>FORGE</h3>
              </div>
            </Link>
          </div>
          {/* Links Box */}
          <div className="footer-info-box">
            {/* Info Box */}
            <div className="nav-links">
              <Link to='#recommended'>HOME</Link>
              <Link to='/products'>STORE</Link>
              <Link to='/products'>PC BUILDER</Link>
              <Link to='/products'>CONTACT US</Link>
            </div>
            {/* Services Box */}
            <div className="footer-links-location">
              <div className="footer-contact">
                <img src="" alt="email icon" />
                <p>pcforge@gmail.com</p>
              </div>
              <div className="footer-contact">
                <img src="" alt="tel icon" />
                <p>+39 333 1234567</p>
              </div>
              <div className="footer-contact">
                <img src="" alt="map icon" />
                <p>Via Roma 1, Palermo(PA)</p>
              </div>
            </div>
            {/* Components Box */}
            <div className="footer-links-components">
              <div className='footer-links-card'>
                <Link to='#'>Processors</Link>
              </div>
              <div className='footer-links-card'>
                <Link to='#'>Graphics Cards</Link>
              </div>
              <div className='footer-links-card'>
                <Link to='#'>Motherboards</Link>
              </div>
              <div className='footer-links-card'>
                <Link to='#'>Memory (RAM)</Link>
              </div>
              <div className='footer-links-card'>
                <Link to='#'>Storage</Link>
              </div>
            </div>
          </div>
          {/* Social */}
          <div className="footer-social">
            <img src="" alt="facebook icon" />
            <img src="" alt="twitter icon" />
            <img src="" alt="instagram icon" />
            <img src="" alt="linkedin icon" />
            <img src="" alt="youtube icon" />
          </div>
        </div>
        <div className="copyright">
          {/* Copyright */}
          <p>Copyright 2023 PCForge, All rights reserved.</p>
          <p>Privacy Policy | Cookie Policy</p>
        </div>
      </div>
    </footer >
  )
}

export default Footer;