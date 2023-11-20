import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

/* COMPONENTS */
import Dropdown from '../home-components/Dropdown';


/* Components SVGS */
import logo from '../../assets/icons/logo.svg';
import cpuIcon from '../../assets/icons/componentsIcon/cpu-icon.svg'
import gpuIcon from '../../assets/icons/componentsIcon/gpu-icon.svg'
import motherboardIcon from '../../assets/icons/componentsIcon/motherboard-icon.svg'
import ramIcon from '../../assets/icons/componentsIcon/ram-icon.svg'
import powerIcon from '../../assets/icons/componentsIcon/power-icon.svg'
import ssdIcon from '../../assets/icons/componentsIcon/ssd-icon.svg'
import caseIcon from '../../assets/icons/componentsIcon/case-icon.svg'
import coolerIcon from '../../assets/icons/componentsIcon/cooler-icon.svg'


const Navbar = ({ hamburger, event }) => {
  // Stato per gestire la visibilità delle dropdown
  const [dropdownVisible, setDropdownVisible] = useState(null);

  const handleMouseEnter = (menu) => {
    setDropdownVisible(menu);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(null);
  };

  /* Dropdown Data */
  const componentsItems = [
    {
      id: 1,
      text: 'CPU',
      image: cpuIcon,
      path: '/products/cpu'
    },
    {
      id: 2,
      text: 'GPU',
      image: gpuIcon,
      path: '/products/gpu'
    },
    {
      id: 3,
      text: 'Motherboard',
      image: motherboardIcon,
      path: '#'
    },
    {
      id: 4,
      text: 'RAM',
      image: ramIcon,
      path: '#'
    },
    {
      id: 5,
      text: 'Power',
      image: powerIcon,
      path: '#'
    },
    {
      id: 6,
      text: 'SSD',
      image: ssdIcon,
      path: '/products/ssd'
    },
    {
      id: 7,
      text: 'Case',
      image: caseIcon,
      path: '/products/case'
    },
    {
      id: 8,
      text: 'Cooler',
      image: coolerIcon,
      path: '/products/cooler'
    },
  ];

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
          <Link
            to='/products'
            className="nav-dropdown-box"
            onMouseEnter={() => handleMouseEnter('store')}
          >
            STORE

            {dropdownVisible === 'store' && (
              <div className="nav-dropdown-content" onMouseLeave={handleMouseLeave}>
                {/* Contenuto della tendina */}
                <div className="nav-store-dropdown-card">
                  <img src="" alt="" />
                  <p></p>
                </div>
              </div>
            )}
          </Link>
          <Link
            to='/products'
            className="nav-dropdown-box"
            onMouseEnter={() => handleMouseEnter('components')}
          >
            COMPONENTI

            {dropdownVisible === 'components' && (
              <Dropdown data={componentsItems} leaveEvent={handleMouseLeave} />
            )}
          </Link>
          <Link to='/products'>PC BUILDER</Link>
          <Link to='/products'>CONTATTI</Link>
        </div>

        <div className="nav-right">
          <Link to='/login'>
            <PersonIcon />
          </Link>
          <Link to='/cart'>
            <ShoppingCartIcon />
          </Link>
          <div className="hamburger">
            <input type="checkbox" id="checkbox" checked={hamburger} onChange={event} />
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
};

export default Navbar;
