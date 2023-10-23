import React, {useState, useEffect} from 'react'
//import {Link} from "react-router-dom"
import {Link} from "react-scroll"
import './Navbar.css';

function Navbar() {
    
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [offsetValue, setOffsetValue] = useState(0);

  useEffect(() => {
    // Calculate the offset value based on viewport size or any other criteria.
    // You can adjust this calculation as needed.
    const calculateOffsetValue = () => {
      const viewportHeight = window.innerHeight;
      // Example: Set the offset to 20% of the viewport height
      const newOffsetValue = 0.2 * viewportHeight;
      console.log(newOffsetValue)
      setOffsetValue(newOffsetValue);
    };

    // Call the calculation function initially and add a resize event listener
    calculateOffsetValue();
    window.addEventListener('resize', calculateOffsetValue);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', calculateOffsetValue);
    };
  }, []);

  return (
    
    <div className='navbar'>
      <ul className='nav-menu'>
        <li className='nav-item'>
          <Link to='hero' className='nav-links' spy={true} smooth={true} offset={0} duration={500} onClick={handleClick}>
            HOME
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='about' className='nav-links' spy={true} smooth={true} offset={0} duration={500} onClick={handleClick}>
            ABOUT
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='projects' className='nav-links' spy={true} smooth={true} offset={0} duration={500} onClick={handleClick}>
            PROJECTS
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='experience' className='nav-links' spy={true} smooth={true} offset={0} duration={500} onClick={handleClick}>
            EXPERIENCE
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='contact' className='nav-links' spy={true} smooth={true} offset={0} duration={500} onClick={handleClick}>
            CONTACT
          </Link>
        </li>
      </ul>
    </div>
    
  )
}

export default Navbar
