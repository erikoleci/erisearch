import React, { useState } from 'react';

const SearchFilter = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    onSearch(term, ['name', 'client', 'props', 'tags']); // Passing an array of fields to search
  };

  return (
    <div className="search-container">
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Search by name, client, props, or tags"
      />
    </div>
  );
};

export default SearchFilter;
