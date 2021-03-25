import React from 'react';
import PropTypes from 'prop-types';

const Books = props => {
  const { id, title, category } = props;
  return (
    <tr>
      <th>{id}</th>
      <th>{title}</th>
      <th>{category}</th>
    </tr>
  );
};

Books.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  category: PropTypes.string,
};

Books.defaultProps = {
  id: 999,
  title: 'title must be here',
  category: 'category must be here',
};

export default Books;
