import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { changeFilter, removeBook } from '../actions';
import CategoryFilter from '../components/CategoryFilter';

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

  // changeFilter('All');
  let currentBookList;
  if (selectedCategory === 'All') {
    currentBookList = books.concat();
  } else {
    currentBookList = books.filter(book => book.category === selectedCategory);
  }

  return (
    <div>
      <CategoryFilter handleChange={handleFilterChange} />
      <div>
        <h1>Books as an HTML Table</h1>
        <table>
          <thead>
            <tr>
              <th>Book ID</th>
              <th>Title</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {currentBookList.map(book => (
              <Book
                key={book.id}
                id={book.id}
                title={book.title}
                category={book.category}
                handleClick={handleRemoveBook}
              />
            ))}
          </tbody>
        </table>
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
