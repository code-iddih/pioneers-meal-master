import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function CategoryList() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const predefinedCategories = ['Italian', 'Chinese', 'Mexican', 'Indian', 'American'];

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoryPromises = predefinedCategories.map(category =>
          axios.get(`https://api.edamam.com/search`, {
            params: {
              q: category,
              app_id: '2abc928f',
              app_key: '553e1b957cfe9951931e0eb383665e8d',
              from: 0,
              to: 1
            }
          })
        );

        const responses = await Promise.all(categoryPromises);
        const categoryData = responses.map((response, index) => ({
          category: predefinedCategories[index],
          recipe: response.data.hits[0]?.recipe 
        }));

        setCategories(categoryData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching categories:', error);
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Categories</h1>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>
            <h2>{category.category}</h2>
            {category.recipe && (
              <>
                <img src={category.recipe.image} alt={category.recipe.label} style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
                <p>{category.recipe.label}</p>
              </>
            )}
            <Link to={`/categories/${category.category}`}>See more recipes</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryList;
