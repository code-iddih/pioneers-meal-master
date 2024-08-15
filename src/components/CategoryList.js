import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Footer from './Footer';
import './CategoryList.css';

function CategoryList() {
  const [categories, setCategories] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [filteredCategories, setFilteredCategories] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3002/categories')
      .then(response => {
        setCategories(response.data);
        setFilteredCategories(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching categories:', error);
        setLoading(false);
      });
  }, []);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    const results = categories.filter(category =>
      category.name.toLowerCase().includes(query)
    );

    setFilteredCategories(results);
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="category-list-container">
      <div className="category-list">
        <h1>Categories</h1>
        <div className="search-bar">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearch}
            placeholder="Search for categories..."
          />
        </div>
        <ul>
          {filteredCategories.map(category => (
            <li key={category.id}>
              <Link to={`/categories/${category.id}`}>
                <img src={category.image} alt={category.name} />
                <h2>{category.name}</h2>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
}

export default CategoryList;
