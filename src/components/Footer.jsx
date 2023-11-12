import { Link } from "react-router-dom"

/* Images */
import logo from '../assets/icons/logo.svg'
import mail from '../assets/icons/mail.svg'
import telephone from '../assets/icons/telephone.svg'
import location from '../assets/icons/location.svg'
import facebook from '../assets/icons/facebook.svg'
import instagram from '../assets/icons/instagram.svg'
import twitter from '../assets/icons/twitter.svg'

const Footer = () => {
  return (
    <footer className="center-wrapper">
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
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam fuga eligendi laboriosam repudiandae blanditiis autem inventore minima hic aut doloremque.</p>
          </div>
          {/* Links Box */}
          <div className="footer-info-box">
            {/* Info Box */}
            <div className="footer-links-nav footer-info-card">
              <h3>Sitemap</h3>
              <Link to='#recommended'>Home</Link>
              <Link to='/products'>Store</Link>
              <Link to='/products'>Pc Builder</Link>
              <Link to='/products'>Contact Us</Link>
            </div>
            {/* Info Box */}
            <div className="footer-contacts-box footer-info-card">
              <h3>Info</h3>
              <div className="footer-contact">
                <img src={mail} alt="email icon" />
                <p>pcforge@gmail.com</p>
              </div>
              <div className="footer-contact">
                <img src={telephone} alt="tel icon" />
                <p>+39 333 1234567</p>
              </div>
              <div className="footer-contact">
                <img src={location} alt="map icon" />
                <p>Via Roma 16, 90146 CL</p>
              </div>
            </div>
            {/* Social */}
            <div className="footer-social-box footer-info-card">
              <h3>Social</h3>
              <div className="social-icon-box">
                <img src={facebook} alt="facebook icon" />
                <img src={instagram} alt="twitter icon" />
                <img src={twitter} alt="instagram icon" />
              </div>
            </div>
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