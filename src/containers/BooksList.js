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
        <thead>
          <tr>
            <th>Book ID</th>
            <th>Title</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {books.map(book => (
            <Book
              key={book.id}
              id={book.id}
              title={book.title}
              category={book.category}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object),
};

BooksList.defaultProps = {
  books: [],
};

const mapStateToProps = state => ({
  books: state.books,
});

export default connect(mapStateToProps)(BooksList);
