import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Recipe() {
  const { idMeal } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/meals')
      .then(response => {
        const selectedRecipe = response.data.find(meal => meal.idMeal === idMeal);
        setRecipe(selectedRecipe);
      })
      .catch(error => console.error('Error fetching recipe:', error));
  }, [idMeal]);

  if (!recipe) return <p>Loading...</p>;

  return (
    <div>
      <h1>{recipe.strMeal}</h1>
      <img src={recipe.strMealThumb} alt={recipe.strMeal} />
      <p>{recipe.strInstructions}</p>
    </div>
  );
}

export default Recipe;
