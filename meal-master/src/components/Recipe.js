import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Recipe() {
  const { idMeal } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
      .then(response => {
        setRecipe(response.data.meals[0]);
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
