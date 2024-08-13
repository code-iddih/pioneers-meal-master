import React, { useEffect, useState } from 'react';
import axios from 'axios';

function CategoryList() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:5000/categories')
      .then(response => {
        setCategories(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching categories:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Categories</h1>
      <ul>
        {categories.map(category => (
          <li key={category.idCategory}>
            <h2>{category.strCategory}</h2>
            <img src={category.strCategoryThumb} alt={category.strCategory} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryList;
