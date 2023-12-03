import { Link } from "react-router-dom"

/* Images */
import logo from '../../assets/icons/logo.svg'

import CallIcon from '@mui/icons-material/Call';
import PlaceIcon from '@mui/icons-material/Place';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

import pagamenti from '../../assets/images/pagamenti.png'

const Footer = () => {
  /* Dropdown Data */
  const componentsItems = [
    {
      id: 1,
      text: "Processori",
      path: "/products/cpu",
    },
    {
      id: 2,
      text: "Schede Grafiche",
      path: "/products/gpu",
    },
    {
      id: 3,
      text: "Schede madre",
      path: "/products/mb",
    },
    {
      id: 4,
      text: "Memoria (RAM)",
      path: "/products/ram",
    },
    {
      id: 5,
      text: "Ventole",
      path: "products/cooler",
    },
  ];


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
            <div className="footer-contacts-box footer-info-card">
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
          </div>
          {/* Links Box */}
          <div className="footer-info-box">
            {/* Info Box */}
            <div className="footer-links-nav footer-info-card">
              <h3>Sitemap</h3>
              <Link to='/'>Home</Link>
              <Link to='/builder'>Pc Builder</Link>
              <Link to='/contact'>Contact Us</Link>
            </div>
            {/* Info Box */}
            <div className="footer-contacts-box footer-info-card">
              <h3>Componenti</h3>
              {
                componentsItems.map(item => (
                  <Link key={`${item.id}`} to={`${item.path}`} style={{marginBottom: '8px', fontWeight: '300'}}>{item.text}</Link>
                ))
              }
            </div>
            {/* Pay Box */}
            <div className="footer-pay-box footer-info-card">
              <h3>Metodi pagamento</h3>
              <img src={pagamenti} style={{maxWidth: '150px'}}/>
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