import {
  CREATE_BOOK,
  REMOVE_BOOK,
} from '../constants/action-types';

export const createBook = book => ({
  type: CREATE_BOOK,
  payload: book,
});

export const removeBook = book => ({
  type: REMOVE_BOOK,
  payload: book,
});
