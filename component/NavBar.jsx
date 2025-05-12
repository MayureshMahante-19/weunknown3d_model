import React from 'react'

import './NavBar.css' // Optional: Create this for custom styling

const NavBar = () => {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <img src="/weunknownlogo.jpeg" alt="WeUnknown Logo" className="logo-img" />
        <nav className="nav-links">
          <a href="#">Home</a>
          <a href="#">Features</a>
          <a href="#">Contact</a>
        </nav>
      </div>
    </header>
  )
}

export default NavBar 
