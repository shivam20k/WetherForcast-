import React from 'react';

const Search = ({ setCity }) => {
  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  return (
    <div className="search-container">
      <input type="text" placeholder="Enter city name" onChange={handleInputChange} />
    </div>
  );
};

export default Search;
