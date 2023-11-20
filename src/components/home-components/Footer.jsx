import { Link } from "react-router-dom"

/* Images */
import logo from '../../assets/icons/logo.svg'

import CallIcon from '@mui/icons-material/Call';
import PlaceIcon from '@mui/icons-material/Place';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

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
                <h3><span>PC</span>FORGE</h3>
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
                <EmailIcon />
                <p>pcforge@gmail.com</p>
              </div>
              <div className="footer-contact">
                <CallIcon />
                <p>+39 333 1234567</p>
              </div>
              <div className="footer-contact">
                <PlaceIcon />
                <p>Via Roma 16, 90146 CL</p>
              </div>
            </div>
            {/* Social */}
            <div className="footer-social-box footer-info-card">
              <h3>Social</h3>
              <div className="social-icon-box">
                <FacebookIcon sx={{ color: '#fff' }} />
                <InstagramIcon sx={{ color: '#fff' }} />
                <TwitterIcon sx={{ color: '#fff' }} />
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