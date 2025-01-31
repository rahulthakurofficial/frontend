import React from "react";
import { Link } from 'react-router-dom';
import "./Header.css"; 
import letzstepin from "../../assets/gigglezz-logo.png"; 

const Header = () => {
  return (
    <header className="main-header">
      <div className="logo">
        
        <img src={letzstepin} alt="Banquet Bliss Logo" className="logo-img" />
      </div>
      <nav className="navigation">
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
         
          <li><a href="/service">Services</a></li>
          <li><a href="/gallery">Gallery</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
