import React from 'react';
import '../styles/navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="navbar-left">
          <img src="/bluestock-logo-full.png" alt="Bluestock Logo" className="navbar-logo-full" />
        </div>
        <ul className="navbar-menu">
          <li>PRODUCTS</li>
          <li>PRICING</li>
          <li>COMMUNITY</li>
          <li>MEDIA <span className="menu-arrow">▼</span></li>
          <li>SUPPORT <span className="menu-arrow">↗</span></li>
        </ul>
        <div className="navbar-right">
          <span className="signin">Sign In</span>
          <button className="signup">Sign Up Now</button>
          <span className="navbar-grid">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="3" cy="3" r="2" fill="#222"/>
              <circle cx="10" cy="3" r="2" fill="#222"/>
              <circle cx="17" cy="3" r="2" fill="#222"/>
              <circle cx="3" cy="10" r="2" fill="#222"/>
              <circle cx="10" cy="10" r="2" fill="#222"/>
              <circle cx="17" cy="10" r="2" fill="#222"/>
              <circle cx="3" cy="17" r="2" fill="#222"/>
              <circle cx="10" cy="17" r="2" fill="#222"/>
              <circle cx="17" cy="17" r="2" fill="#222"/>
            </svg>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
