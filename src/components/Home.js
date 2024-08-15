import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';
import './Home.css';


const categories = [];

const meals = [];

const Home = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to Meal Master</h1>
        <p>Where taste meets the myth!</p>
        {user && (
          <div className="user-info">
            <h2>Welcome, {user.name}!</h2>
            <img src={user.profilePicture} alt="Profile" className="profile-icon" />
          </div>
        )}
      </header>

      <section className="restaurant-info">
        <h2>About Us</h2>
        <p>
          Meal Master was established in 2023, with a passion for delivering exceptional culinary experiences. Over the years, we have grown to become a beloved destination for food enthusiasts. With a team of over 50 dedicated staff members, we strive to provide the best service and mouth-watering dishes to our patrons.
        </p>
        <h3>Contact Information</h3>
        <p>
          <strong>Address:</strong> Eastern Bypass, Kamakis Town<br />
          <strong>Phone:</strong> (254)727 207 156<br />
          <strong>Email:</strong> mastermeal@gmail.com<br />
          <strong>Website:</strong> www.mealmaster.com
        </p>
      </section>

      <section className="categories">
        <div className="category-list">
          {categories.map(category => (
            <div key={category.idCategory} className="category-item">
              <img src={category.strCategoryThumb} alt={category.strCategory} />
              <h3>{category.strCategory}</h3>
              <p>{category.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="meals">
        <h2>Our Special Meals</h2>
        <div className="meal-list">
          {meals.map(meal => (
            <div key={meal.idMeal} className="meal-item">
              <img src={meal.strMealThumb} alt={meal.strMeal} />
              <h3>{meal.strMeal}</h3>
              <p>{meal.description}</p>
              <details>
                <summary>Instructions</summary>
                <p>{meal.strInstructions}</p>
              </details>
              <ul>
                <li>{meal.strIngredient1}</li>
                <li>{meal.strIngredient2}</li>
                <li>{meal.strIngredient3}</li>
                <li>{meal.strIngredient4}</li>
                <li>{meal.strIngredient5}</li>
                <li>{meal.strIngredient6}</li>
                <li>{meal.strIngredient7}</li>
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
