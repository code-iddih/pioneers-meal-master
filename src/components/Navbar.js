import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link className="navbar-link" to="/">Home</Link></li>
        <li><Link className="navbar-link" to="/categories">Categories</Link></li>
        <li><Link className="navbar-link" to="/meal-plan">Meal Plan</Link></li>
        <li><Link className="navbar-link" to="/profile">Profile</Link></li>
        <li><Link className="navbar-link" to="/search">Search</Link></li>
        <li><Link className="navbar-link" to="/feedback">Feedback</Link></li>
        <li><Link className="navbar-link" to="/login">Login</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
