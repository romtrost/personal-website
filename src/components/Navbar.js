import React, {useState} from 'react'
import {Link} from "react-router-dom"
import './Navbar.css';

function Navbar() {
    
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <ul className='nav-menu'>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={handleClick}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={handleClick}>
                About
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={handleClick}>
                Resume
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={handleClick}>
                Projects
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
