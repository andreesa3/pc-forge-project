import { Link } from "react-router-dom"

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

/* Images */
import logo from '../../assets/icons/logo.svg'

import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Navbar = ({ hamburger, event }) => {
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
          <Link to='/'>HOME</Link>
          <Link to='/products'>STORE</Link>
          <Link to='/products'>PC BUILDER</Link>
          <Link to='/products'>CONTACT US</Link>
        </div>
        <div className="nav-right">
          <Link to='/login'>
            <PersonIcon />
          </Link>
          <Link to='/cart'>
            <ShoppingCartIcon />
          </Link>
          <div className="hamburger">
            <input type="checkbox" id="checkbox" onClick={event}/>
            <label for="checkbox" class="toggle">
              <div class="bars" id="bar1"></div>
              <div class="bars" id="bar2"></div>
              <div class="bars" id="bar3"></div>
            </label>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;