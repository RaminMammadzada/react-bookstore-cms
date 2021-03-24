import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';

const BooksList = props => {
  const { books } = props;

  return (
    <div>
      <h1>Books as an HTML Table</h1>
      <table>
        <tr>
          <th>Book ID</th>
          <th>Title</th>
          <th>Category</th>
        </tr>
        {books.map(book => (
          <Book
            key={book.id}
            id={book.id}
            title={book.title}
            category={book.category}
          />
        ))}
      </table>
    </div>
  );
};

BooksList.propTypes = {
  books: PropTypes.arrayOf,
};

BooksList.defaultProps = {
  books: [],
};

const mapStateToProps = state => ({
  books: state.books,
});

export default connect(mapStateToProps)(BooksList);
