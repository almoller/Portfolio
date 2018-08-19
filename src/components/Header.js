import React from "react";
import { Link, NavLink } from 'react-router-dom';
import logo from '../images/alan-logo.png';



const Header = () => (
  <header>
    <Link className='logoLink' to='/'>
      <div className='logoDiv'>
        <img className='logo' src={logo} alt='logo' />
      </div>
    </Link>
    
    <nav className="navBar">
      <ul>
        <li>
          <NavLink className="link" to="/portfolio"
              activeStyle={{
                fontWeight: '500',
                background: 'rgba(175, 175, 175, 0.4)'
              }}>Portfolio</NavLink>
        </li>
        <li>
          <NavLink className="link" to="/about"
              exact activeStyle={{
                fontWeight: '500',
                background: 'rgba(175, 175, 175, 0.4)'
              }}>About</NavLink>
        </li>
        <li>
          <NavLink className="link" to="/contact"
              exact activeStyle={{
                fontWeight: '500',
                background: 'rgba(175, 175, 175, 0.4)'
              }}>Contact</NavLink>
        </li>
      </ul>
    </nav>

  </header>
);

export default Header;