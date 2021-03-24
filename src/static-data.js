import faker from 'faker';

export function generateBook() {
  return {
    id: faker.random.number(),
    title: faker.random.words(),
    category: faker.random.word(),
  };
}

function generateBooks(numberOfBooks) {
  return Array.from({ length: numberOfBooks }, () => generateBook());
}

export const books = generateBooks(10);
