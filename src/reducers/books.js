import { CREATE_BOOK, REMOVE_BOOK } from '../constants/action-types';
import { books as booksArrays } from '../static-data';

export default function books(store = booksArrays, action) {
  if (action.type === CREATE_BOOK) {
    return [
      ...store, action.payload,
    ];
  }

  if (action.type === REMOVE_BOOK) {
    return store.filter(book => book.id.toString() !== action.payload);
  }
  return store;
}
