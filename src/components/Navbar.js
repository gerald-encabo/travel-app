import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import { Button } from './Button';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const handleCloseMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        }else{
            setButton(true)
        }
    };
    
    useEffect (() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
      <nav className='navbar'>
          <div className='navbar-container'>
              <Link to='/' className='navbar-logo' onClick={handleCloseMenu}>
                  Levart <i class="fas fa-plane-departure"></i>
              </Link>
              <div className='navbar-menu-icon' onClick={handleClick}>
                  <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
              </div>
              <ul className={click ? 'navbar-menu active' : 'navbar-menu'}>
                  <li className='navbar-item'>
                      <Link to='/' className='navbar-links' onClick={handleCloseMenu}>Home</Link>
                  </li>
                  <li className='navbar-item'>
                      <Link to='/services' className='navbar-links' onClick={handleCloseMenu}>Services</Link>
                  </li>
                  <li className='navbar-item'>
                      <Link to='/products' className='navbar-links' onClick={handleCloseMenu}>Products</Link>
                  </li>
                  <li className='navbar-item'>
                      <Link to='/sign-up' className='navbar-links-mobile' onClick={handleCloseMenu}>Sign Up</Link>
                  </li>
              </ul>
              { button && <Button buttonStyle='btn--outline'>Sign Up</Button> }
          </div>
      </nav>
    )
}

export default Navbar;
