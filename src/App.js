import React, { useState } from 'react';
import './App.css'; // You can style the component in a separate CSS file

const NavBar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">Home</li>
        <li className="nav-item">About</li>
        <li className="nav-item">Services</li>
        <li className="nav-item" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
          <span>Dropdown</span>
          {showDropdown && (
            <ul className="dropdown">
              <li className="dropdown-item">Option 1</li>
              <li className="dropdown-item">Option 2</li>
              <li className="dropdown-item">Option 3</li>
            </ul>
          )}
        </li>
        <li className="nav-item">Contact</li>
      </ul>
    </nav>
  );
};

export default NavBar;
