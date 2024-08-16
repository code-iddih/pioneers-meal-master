import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './CategoryDetail.css';

function CategoryDetail() {
  const { idCategory } = useParams();
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://meals-rrih.onrender.com/recipes') 
      .then(response => {
        const filteredRecipes = response.data.filter(recipe => recipe.category === parseInt(idCategory));
        setRecipes(filteredRecipes);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching recipes:', error);
        setLoading(false);
      });
  }, [idCategory]);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="category-detail">
      <h1>Recipes</h1>
      <ul>
        {recipes.map(recipe => (
          <li key={recipe.id}>
            <img src={recipe.image} alt={recipe.name} />
            <h2>{recipe.name}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryDetail;
