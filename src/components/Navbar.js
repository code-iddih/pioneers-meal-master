import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import mealLogo from '../assets/meal.png'; // Adjust the path based on your structure

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={mealLogo} alt="Meal Logo" className="navbar-logo" />
      </div>
      <ul>
        <li><Link className="navbar-link" to="/">Home</Link></li>
        <li><Link className="navbar-link" to="/categories">Categories</Link></li>
        <li><Link className="navbar-link" to="/meal-plan">Meal Plan</Link></li>
        <li><Link className="navbar-link" to="/profile">Profile</Link></li>
        <li><Link className="navbar-link" to="/search">Search</Link></li>
        <li><Link className="navbar-link" to="/feedback">Feedback</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
