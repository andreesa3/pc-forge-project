import { Link } from "react-router-dom"
import '../style/nav.css'

/* Components */
import Button from "./Button";

/* Images */
import cart from '../assets/icons/shopping-cart.svg'
import logo from '../assets/icons/logo.svg'
import user from '../assets/icons/user.svg'

const Navbar = () => {
  return (
    <nav>
      <div className="nav-wrapper wrapper">
        <Link to='/'>
          <div className="logo">
            <img src={logo} alt="logo" />
            <h3><span className="purple">PC</span>FORGE</h3>
          </div>
        </Link>
        <div className="nav-links">
          <Link to='#recommended'>HOME</Link>
          <Link to='/products'>STORE</Link>
          <Link to='/products'>PC BUILDER</Link>
          <Link to='/products'>CONTACT US</Link>
        </div>
        <div className="nav-right">
          <Link to='/login'>
            <img src={user} className="user" alt="user icon" />
          </Link>
          <Link to='/cart'>
            <img src={cart} className="cart" alt="cart img" />
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;