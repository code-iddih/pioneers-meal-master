import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Recipe() {
  const { idMeal } = useParams();  // Assuming idMeal maps to a recipe URI or ID
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get(`https://api.edamam.com/search`, {
          params: {
            r: idMeal,  // Use the recipe URI for detailed fetching
            app_id: '2abc928f',
            app_key: '553e1b957cfe9951931e0eb383665e8d'
          }
        });
        setRecipe(response.data.hits[0].recipe);
      } catch (error) {
        console.error('Error fetching recipe:', error);
      }
    };

    fetchRecipe();
  }, [idMeal]);

  if (!recipe) return <p>Loading...</p>;

  return (
    <div>
      <h1>{recipe.label}</h1>
      <img src={recipe.image} alt={recipe.label} />
      <p>{recipe.ingredientLines.join(', ')}</p>
      <p>{recipe.instructions}</p>
    </div>
  );
}

export default Recipe;
