import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createBook } from '../actions';
import bookCategories from '../constants/bookCategories';
import '../index.css';

const BooksForm = props => {
  const [state, setState] = useState({
    id: Date.now().toString().slice(-5),
    title: '',
    category: 'select category',
  });

  const bookCategoriesExtended = ['select category', ...bookCategories];

  const handleSubmit = event => {
    event.preventDefault();
    if (state.category === 'select category'
      || state.title === '') {
      // eslint-disable-next-line no-alert
      alert(`None of the inputs can be empty in the form!\n
            Please fill both title and category fields.`);
    } else {
      setState({
        ...state, id: Date.now().toString().slice(-5),
      });
      props.createBook(state);
    }
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
    <div className="create-book">
      <p className="Line-4" />
      <span className="add-new-book-text">ADD NEW BOOK</span>
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="title">
          <input
            type="text"
            name="title"
            onChange={handleChange}
            className="title-input"
          />
        </label>
        <label htmlFor="category">
          <select
            onChange={handleChange}
            name="category"
            className="category-input"
          >
            {bookCategoriesExtended.map(category => (
              <option
                key={category}
                value={category}
              >
                {category}
              </option>
            ))}
          </select>
        </label>
        <input
          type="submit"
          value="ADD BOOK"
          className="add-book-button"
        />
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
