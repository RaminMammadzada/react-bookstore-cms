/* eslint-disable jsx-a11y/anchor-is-valid */
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
      <li>
        <div className="category-title-author">
          <p className="category">{category}</p>
          <p className="title">{title}</p>
          <a
            href="#"
            id={id}
            onClick={handleClick}
            className="flex-item"
          >
            {author}
          </a>
        </div>
        <div className="row">
          <a
            href="#"
            id={id}
            onClick={handleClick}
            className="flex-item"
          >
            Comment
          </a>
          <a
            href="#"
            id={id}
            onClick={handleClick}
            className="flex-item"
          >
            Remove
          </a>
          <a
            href="#"
            id={id}
            onClick={handleClick}
            className="flex-item"
          >
            Edit
          </a>
        </div>
      </li>
      <li>
        {`${completedPercent} % Completed`}
      </li>
      <li>
        {`Current chapter: ${currentChapter}`}
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
