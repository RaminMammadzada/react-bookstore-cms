import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createBook } from '../actions';

const BooksForm = props => {
  const [state, setState] = useState({
    id: Date.now(),
    title: '',
    category: '',
  });
  const bookCategories = [
    '',
    'Action',
    'Biography',
    'History',
    'Horror',
    'Kids',
    'Learning',
    'Sci-Fi',
  ];

  const handleSubmit = event => {
    event.preventDefault();
    setState({
      ...state, id: Date.now(),
    });
    props.createBook(state);
  };

  const handleChange = event => {
    const { value } = event.target;
    switch (event.target.name) {
      case 'title':
        setState({
          ...state, title: value,
        });
        break;
      case 'category':
        setState({
          ...state, category: value,
        });
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <h2>{`title: ${state.title}`}</h2>
      <h2>{`category: ${state.category}`}</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">
          Title:
          <input
            type="text"
            name="title"
            onChange={handleChange}
          />
        </label>

        <label htmlFor="category">
          Category:
          <select
            onChange={handleChange}
            name="category"
          >
            {bookCategories.map(category => (
              <option
                key={category}
                value={category}
              >
                {category}
              </option>
            ))}
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

BooksForm.propTypes = {
  createBook: PropTypes.func,
};

BooksForm.defaultProps = {
  createBook: createBook(),
};

const mapStateToProps = state => ({
  books: state.books,
});

const mapDispatchToProps = dispatch => ({
  createBook: book => dispatch(createBook(book)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksForm);
