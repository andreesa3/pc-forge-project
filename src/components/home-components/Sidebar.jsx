import { Link } from 'react-router-dom'
import logo from '../../assets/icons/logo.svg'

import HomeIcon from '@mui/icons-material/Home';
import LaptopChromebookSharpIcon from '@mui/icons-material/LaptopChromebookSharp';
import ConstructionSharpIcon from '@mui/icons-material/ConstructionSharp';
import PhoneIcon from '@mui/icons-material/Phone';

const Sidebar = ({ hamburger }) => {

  return (
    <>
      {
        <div className={`sidebar ${hamburger ? 'visible' : ''}`}>
          {/* Logo */}
          <div className="logo">
            <Link to='/'>
              <img src={logo} alt="logo" />
              <h3><span className="purple">PC</span>FORGE</h3>
            </Link>
          </div>

          {/* Sidebar Links */}
          <div className="sidebar-links">
            <div className="sidebar-link-card">
              <Link to='/'>
                <HomeIcon />
                <p>Home</p>
              </Link>
            </div>
            <div className="sidebar-link-card">
              <Link to='/'>
                <LaptopChromebookSharpIcon />
                <p>Store</p>
              </Link>
            </div>
            <div className="sidebar-link-card">
              <Link to='/'>
                <ConstructionSharpIcon />
                <p>Build your PC</p>
              </Link>
            </div>
            <div className="sidebar-link-card">
              <Link to='/'>
                <PhoneIcon />
                <p>Contact Us</p>
              </Link>
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default Sidebar;