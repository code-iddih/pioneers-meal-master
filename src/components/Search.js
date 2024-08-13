import React, { useState } from 'react';

function Search({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (typeof onSearch === 'function') {
      onSearch(query);
    } else {
      console.error('onSearch prop is not a function');
    }
  };

  return (
    <form onSubmit={handleSearch}>
      <input 
        type="text" 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
        placeholder="Search recipes or categories"
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default Search;

