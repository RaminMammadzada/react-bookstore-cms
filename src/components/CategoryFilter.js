import React from 'react';
import PropType from 'prop-types';

const CategoryFilter = props => {
  const { handleChange } = props;

  const bookCategories = [
    'All',
    'Action',
    'Biography',
    'History',
    'Horror',
    'Kids',
    'Learning',
    'Sci-Fi',
  ];

  return (
    <label htmlFor="category">
      Category:
      <select
        onChange={handleChange}
        name="category"
      >
        {bookCategories.map(category => (
          <option
            key={category}
            value={category}
          >
            {category}
          </option>
        ))}
      </select>
    </label>
  );
};

CategoryFilter.propTypes = {
  handleChange: PropType.func,
};

CategoryFilter.defaultProps = {
  handleChange: null,
};

export default CategoryFilter;
