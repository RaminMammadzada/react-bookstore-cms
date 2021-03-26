import faker from 'faker';
import bookCategories from './constants/bookCategories';

export function generateBook() {
  return {
    id: faker.random.number({ min: 10001, max: 99999 }),
    title: faker.random.words().toUpperCase(),
    category: bookCategories[Math.floor(Math.random() * bookCategories.length)],
    author: faker.random.words().toUpperCase(),
    completedPercent: faker.random.number({ min: 1, max: 99 }),
    currentChapter: faker.random.number({ min: 1, max: 20 }),
  };
}

function generateBooks(numberOfBooks) {
  return Array.from({ length: numberOfBooks }, () => generateBook());
}

export const books = generateBooks(10);
