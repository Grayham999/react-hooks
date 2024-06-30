// src/components/Filter.js
import React from 'react';

const Filter = ({ setFilter }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilter((prevFilter) => ({
      ...prevFilter,
      [name]: value,
    }));
  };

  return (
    <div className="filter">
      <input
        type="text"
        name="title"
        placeholder="Filter by title"
        onChange={handleChange}
      />
      <input
        type="number"
        name="rating"
        placeholder="Filter by rating"
        onChange={handleChange}
        min="1"
        max="5"
      />
    </div>
  );
};

export default Filter;
