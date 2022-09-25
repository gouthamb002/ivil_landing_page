import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button'
import './Navbar.css'

const Navbar = () => {
  const [click, setClick] = useState(false)
  const [button, setButton] = useState(true) 
  
  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false)
    } else {
      setButton(true)
    }
  }

  useEffect(() => {
    showButton();
  }, [])

  window.addEventListener('resize', showButton)

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            {/* <img src="/images/ivil_logo.jpg" alt="" /> */}
            IViL - IIT for Villages
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/aboutus'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                About Us
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/projects'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Projects
              </Link>
            </li>

            {/* <li>
              <Link
                to='/resources'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Resources
              </Link>
            </li>
            <li>
              <Link
                to='/administration'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Administration
              </Link>
            </li> */} 
          </ul> 
          {button && <Button buttonStyle='btn--outline'>Join Us</Button>}
        </div>
      </nav>
    </>
  )
}

export default Navbar