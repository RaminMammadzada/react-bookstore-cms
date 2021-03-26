import faker from 'faker';
import bookCategories from './constants/bookCategories';

export function generateBook() {
  return {
    id: faker.random.number({ min: 10001, max: 99999 }),
    title: faker.random.words().toUpperCase(),
    category: bookCategories[Math.floor(Math.random() * bookCategories.length)],
  };
}

function generateBooks(numberOfBooks) {
  return Array.from({ length: numberOfBooks }, () => generateBook());
}

export const books = generateBooks(10);
