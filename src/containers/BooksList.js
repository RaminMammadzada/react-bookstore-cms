import React from 'react';
import store from '../store';
import Book from '../components/Book';

const BooksList = () => {
  const state = store.getState();

  console.log(state);
  return (
    <div>
      <h1>Books as an HTML Table</h1>
      <table>
        <tr>
          <th>Book ID</th>
          <th>Title</th>
          <th>Category</th>
        </tr>
        {state.books.forEach(book => {
          <Book id={book.id} title={book.title} category={book.category} />;
        })}
      </table>
    </div>
  );
};

export default BooksList;
