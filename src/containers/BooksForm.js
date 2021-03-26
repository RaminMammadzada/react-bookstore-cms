import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createBook } from '../actions';
import bookCategories from '../constants/bookCategories';

const BooksForm = props => {
  const [state, setState] = useState({
    id: Date.now().toString().slice(-5),
    title: '',
    category: 'not selected',
  });

  const bookCategoriesExtended = ['not selected', ...bookCategories];

  const handleSubmit = event => {
    event.preventDefault();
    if (state.category === 'not selected'
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
