import React, {useState} from 'react'
import {Link} from "react-router-dom"
import './Navbar.css';

function Navbar() {
    
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      <div className='navbar'>
        <ul className='nav-menu'>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={handleClick}>
              HOME
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={handleClick}>
              ABOUT
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={handleClick}>
              PROJECTS
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={handleClick}>
              EXPERIENCE
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={handleClick}>
              CONTACT
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Navbar
