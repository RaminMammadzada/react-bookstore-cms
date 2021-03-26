import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FaUserCircle } from 'react-icons/fa';
import Book from '../components/Book';
import { changeFilter, removeBook } from '../actions';
import CategoryFilter from '../components/CategoryFilter';
import '../index.css';

const BooksList = props => {
  const {
    books,
    selectedCategory,
    removeBook,
    changeFilter,
  } = props;

  const handleRemoveBook = event => {
    event.preventDefault();
    const bookId = event.target.id;
    removeBook(bookId);
  };

  const handleFilterChange = event => {
    event.preventDefault();
    const category = event.target.value;
    changeFilter(category);
  };

  let currentBookList;
  if (selectedCategory === 'All') {
    currentBookList = books.concat();
  } else {
    currentBookList = books.filter(book => book.category === selectedCategory);
  }
  console.log(currentBookList);

  return (
    <div className="booklist-and-heaader">
      <div className="header">
        <div className="header-navbar">
          <h1 className="bookstote-cms">Bookstrote CMS</h1>
          <h2 className="books-text-in-header">Books</h2>
          <CategoryFilter handleChange={handleFilterChange} />
        </div>
        <FaUserCircle className="user-icon" />
      </div>
      <div className="books-list">
        {currentBookList.map(book => (
          <Book
            key={book.id}
            id={book.id}
            title={book.title}
            category={book.category}
            author={book.author}
            completedPercent={book.completedPercent}
            currentChapter={book.currentChapter}
            handleClick={handleRemoveBook}
          />
        ))}
      </div>
    </div>
  );
};

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object),
  removeBook: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
  selectedCategory: PropTypes.string.isRequired,
};

BooksList.defaultProps = {
  books: [],
};

const mapStateToProps = state => ({
  books: state.books,
  selectedCategory: state.filter,
});

const mapDispatchToProps = dispatch => ({
  removeBook: bookId => dispatch(removeBook(bookId)),
  changeFilter: category => dispatch(changeFilter(category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
