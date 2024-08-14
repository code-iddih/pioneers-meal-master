import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';
import './Navbar.css';
import mealLogo from '../assets/meal.png'; 

function Navbar() {
  const { isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    if (!isLoggedIn) {
      navigate('/login');
    } else {
      navigate(path);
    }
  };

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={mealLogo} alt="Meal Logo" className="navbar-logo" />
      </div>
      <ul>
        <li onClick={() => handleNavigation('/')}>Home</li>
        <li onClick={() => handleNavigation('/categories')}>Categories</li>
        <li onClick={() => handleNavigation('/meal-plan')}>Meal Plan</li>
        <li onClick={() => handleNavigation('/profile')}>Profile</li>
        <li onClick={() => handleNavigation('/search')}>Search</li>
        <li onClick={() => handleNavigation('/feedback')}>Feedback</li>
      </ul>
    </nav>
  );
}

export default Navbar;
