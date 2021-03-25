import React from 'react';
import PropTypes from 'prop-types';

const Books = props => {
  const {
    id,
    title,
    category,
    handleClick,
  } = props;

  return (
    <tr>
      <th>{id}</th>
      <th>{title}</th>
      <th>{category}</th>
      <th>
        <button
          type="button"
          id={id}
          onClick={handleClick}
        >
          X
        </button>
      </th>
    </tr>
  );
};

Books.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  category: PropTypes.string,
  handleClick: PropTypes.func,
};

Books.defaultProps = {
  id: 999,
  title: 'title must be here',
  category: 'category must be here',
  handleClick: null,
};

export default Books;
