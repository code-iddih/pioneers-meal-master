import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function CategoryList() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then(response => {
        setCategories(response.data.categories);
      })
      .catch(error => console.error('Error fetching categories:', error));
  }, []);

  return (
    <div>
      <h1>Meal Categories</h1>
      <ul>
        {categories.map(category => (
          <li key={category.idCategory}>
            <Link to={`/categories/${category.idCategory}`}>
              <img src={category.strCategoryThumb} alt={category.strCategory} />
              <h2>{category.strCategory}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryList;
