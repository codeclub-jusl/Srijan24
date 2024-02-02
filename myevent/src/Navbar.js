// Navbar.js

import React from 'react';
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

export default Navbar;
