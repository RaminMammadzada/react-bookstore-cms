/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import '../index.css';
import PieChartComponent from './PieChartComponent';

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
          <p className="category black-2">{category}</p>
          <p className="title">{title}</p>
          <a
            href="#"
            id={id}
          >
            {author}
          </a>
        </div>
        <div>
          <a
            href="#"
            id={id}
            className="flex-row-item Line-2 padding-1"
          >
            Comments
          </a>
          <a
            href="#"
            id={id}
            onClick={handleClick}
            className="flex-row-item Line-2 padding-1"
          >
            Remove
          </a>
          <a
            href="#"
            id={id}
            className="flex-row-item Line-2 padding-1"
          >
            Edit
          </a>
        </div>
      </li>
      <li className="percentage-box">
        <div className="flex-row">
          <PieChartComponent percentage={parseInt(completedPercent, 10)} />
          <div className="flex-columm">
            <h2 className="flex-column-item percentage">{`${completedPercent} %`}</h2>
            <p className="black-2 flex-column-item">Completed</p>
          </div>
        </div>
      </li>
      <li>
        <div className="flex-row">
          <p className="Line-3" />
          <div className="current-chapter-box">
            <p className="black-2 current-chapter-text">CURRENT CHAPTER</p>
            <p className="current-chapter-number">{`Chapter ${currentChapter}`}</p>
            <buton className="update-button">
              UPDATE PROFGRESS
            </buton>
          </div>
        </div>
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
