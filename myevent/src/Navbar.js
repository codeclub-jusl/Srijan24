// Navbar.js

/*import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Srijan 24</div>
      <div className="menu">
        <ul className="nav-links">
          <li>Events</li>
          <li>Sponsors</li>
          <li>Workshop</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div className="auth">
        <span>Login</span>
        <span>|</span>
        <span>Sign Out</span>
      </div>
    </nav>
  );
};

export default Navbar; */
import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  // Adding the states
  const [isActive, setIsActive] = useState(false); //usestates being used in here 

  // Add the active class 
  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };

  // Clean up function to remove the active class
  const removeActive = () => {
    setIsActive(false);
  };

  return (
    <nav className={`navbar ${isActive ? 'active' : ''}`}>
      <div className="logo">Srijan24</div>
      <ul className={`navMenu ${isActive ? 'active' : ''}`}>
        <li onClick={removeActive}>
          <a href="#home" className="navLink">
            Home
          </a>
        </li>
        <li onClick={removeActive}>
          <a href="#home" className="navLink">
            Workshop
          </a>
        </li>
        <li onClick={removeActive}>
          <a href="#home" className="navLink">
            Sponsors 
          </a>
        </li>
        <li onClick={removeActive}>
          <a href="#home" className="navLink">
            Events 
          </a>
        </li>
        <li onClick={removeActive}>
          <a href="#home" className="navLink">
            Log In  
          </a>
        </li>
        {/*<li onClick={removeActive}>
          <a href="#home" className="navLink">
            Gg
          </a>
  </li> */}
        <li onClick={removeActive}>
          <a href="#home" className="navLink">
            Sign Out  
          </a>
        </li>
      </ul>
      <div className={`hamburger ${isActive ? 'active' : ''}`} onClick={toggleActiveClass}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;

