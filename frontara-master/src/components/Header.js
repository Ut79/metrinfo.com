// src/components/Header.js
import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <header className="header">
    <nav className="navbar">
      <div className="logo">Metrinfo.com</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
