import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function CategoryDetail() {
  const { idCategory } = useParams();
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:5000/meals')
      .then(response => {
        const filteredMeals = response.data.filter(meal => meal.idCategory === idCategory);
        setMeals(filteredMeals);
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
      <h1>Recipes</h1>
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
