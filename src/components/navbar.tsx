// Navbar.tsx
import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="logo">Finance Manager</h1>
        <ul className="nav-links">
          <li><Link to="/records">Records</Link></li>
          <li><Link to="/analysis">Analysis</Link></li>
          <li><Link to="/budgets">Budgets</Link></li>
          <li><Link to="/accounts">Accounts</Link></li>
          <li><Link to="/categories">Categories</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
