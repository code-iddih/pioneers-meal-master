import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/categories">Categories</Link></li>
        <li><Link to="/meal-plan">Meal Plan</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/search">Search</Link></li>
        <li><Link to="/feedback">Feedback</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
