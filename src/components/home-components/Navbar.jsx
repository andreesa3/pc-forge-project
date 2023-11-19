import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import logo from '../../assets/icons/logo.svg';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Navbar = ({ hamburger, event }) => {
  const [isSelectOpen, setIsSelectOpen] = useState(false);

  return (
    <nav className="center-wrapper">
      <div className="nav-wrapper wrapper">
        <Link to='/'>
          <div className="logo">
            <img src={logo} alt="logo" />
            <h3><span className="purple">PC</span>FORGE</h3>
          </div>
        </Link>
        <div className="nav-links">
          <Link to='/prebuilder'>PREBUILDER</Link>
          <div
            className="components-link"
            onMouseEnter={() => setIsSelectOpen(true)}
            onMouseLeave={() => setIsSelectOpen(false)}
          >
            COMPONENTS
            {isSelectOpen && (
              <div className="select-dropdown">
                <Link to='/products/cpu'>CPU</Link>
                <Link to='/products/gpu'>GPU</Link>
                
              </div>
            )}
          </div>
          <Link to=''>PC BUILDER</Link>
          <Link to=''>CONTACT US</Link>
        </div>
        <div className="nav-right">
          <Link to='/login'>
            <PersonIcon />
          </Link>
          <Link to='/cart'>
            <ShoppingCartIcon />
          </Link>
          <div className="hamburger">
            <input type="checkbox" id="checkbox" onClick={event} />
            <label htmlFor="checkbox" className="toggle">
              <div className="bars" id="bar1"></div>
              <div className="bars" id="bar2"></div>
              <div className="bars" id="bar3"></div>
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
