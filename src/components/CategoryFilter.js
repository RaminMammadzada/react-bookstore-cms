import React from 'react';
import PropType from 'prop-types';
import bookCategories from '../constants/bookCategories';

const CategoryFilter = props => {
  const { handleChange } = props;
  const bookCategoriesExtended = ['All', ...bookCategories];

  return (
    <label htmlFor="category">
      Category:
      <select
        onChange={handleChange}
        name="category"
      >
        {bookCategoriesExtended.map(category => (
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
