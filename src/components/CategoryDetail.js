import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function CategoryDetail() {
  const { idCategory } = useParams();
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await axios.get(`https://api.edamam.com/search`, {
          params: {
            q: idCategory,
            app_id: '2abc928f',
            app_key: '553e1b957cfe9951931e0eb383665e8d',
            from: 0,
            to: 10
          }
        });
        setMeals(response.data.hits.map(hit => hit.recipe));
        setLoading(false);
      } catch (error) {
        console.error('Error fetching meals:', error);
        setLoading(false);
      }
    };

    fetchMeals();
  }, [idCategory]);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>{idCategory} Recipes</h1>
      <ul>
        {meals.map(meal => (
          <li key={meal.uri}>
            <h2>{meal.label}</h2>
            <img src={meal.image} alt={meal.label} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryDetail;
