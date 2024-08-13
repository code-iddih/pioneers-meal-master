import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function CategoryDetail() {
  const { idCategory } = useParams();
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${idCategory}`)
      .then(response => {
        setMeals(response.data.meals);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching meals:', error);
        setLoading(false);
      });
  }, [idCategory]);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>{idCategory} Recipes</h1>
      <ul>
        {meals.map(meal => (
          <li key={meal.idMeal}>
            <h2>{meal.strMeal}</h2>
            <img src={meal.strMealThumb} alt={meal.strMeal} />
          </li>
        ))}
      </ul>
    </div>
  );
}


export default CategoryDetail;