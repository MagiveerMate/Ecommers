import React, { useState } from 'react';

const SearchBar = ({ products, onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <form className='search-item' onSubmit={handleSearchSubmit}>
      <label className='search-item-label'>Search Item</label>
      <br />
      <input style={{width:'400px'}}
        className='search-bar'
        type='text'
        placeholder='Apple watch, Samsung S21, Macbook Pro, ....'
        value={searchQuery}
        onChange={handleSearchChange}
      />
      
    </form>
  );
};

export default SearchBar;