import React from 'react';

const BookForm = () => {
  const bookCategories = [
    'Action',
    'Biography',
    'History',
    'Horror',
    'Kids',
    'Learning',
    'Sci-Fi',
  ];

  const handleSubmit = event => {
    alert('it is submitted');
    event.preventDefault();
  };

  console.log('it is inside books form now');
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">
          Title:
          <input type="text" name="title" />
        </label>

        <label htmlFor="category">
          Category:
          <select>
            {bookCategories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default BookForm;
