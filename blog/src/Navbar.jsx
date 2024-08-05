import React, { useState } from 'react';
import { FiAlignJustify } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  const handleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <div className="container-fluid">
      <div className="navbar">
        <div className="navbar-title">Icon</div>
        <div className="hamburger" onClick={handleNav}>
          <FiAlignJustify className="icon" />
        </div>
        <ul className={`courses-nav ${showNav ? 'show' : ''}`}>
          <li><Link to="/" className="nav-link">Form</Link></li>
          <li><Link to="/list" className="nav-link">All Data</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
