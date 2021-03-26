import React from 'react';
import PropTypes from 'prop-types';
import '../index.css';

const Books = props => {
  const {
    id,
    title,
    author,
    completedPercent,
    currentChapter,
    category,
    handleClick,
  } = props;

  return (
    <ul className="book-ul">
      <li>{id}</li>
      <li>{title}</li>
      <li>{category}</li>
      <li>{author}</li>
      <li>{completedPercent}</li>
      <li>{currentChapter}</li>
      <li>
        <button
          type="button"
          id={id}
          onClick={handleClick}
        >
          X
        </button>
      </li>
    </ul>
  );
};

Books.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  category: PropTypes.string,
  handleClick: PropTypes.func,
  author: PropTypes.string.isRequired,
  completedPercent: PropTypes.number.isRequired,
  currentChapter: PropTypes.number.isRequired,
};

Books.defaultProps = {
  id: 999,
  title: 'title must be here',
  category: 'category must be here',
  handleClick: null,
};

export default Books;
