const books = require('./module.js');
const lowrValue = require('./base.js');

              // 1
for (let actual = 0; actual < books.length - 1; actual++) {
  let lowr = lowrValue(books, actual);

  let actualBook = books[actual];
  console.log('actual position', actual);
  console.log('actual book', books[actual]);
  let cheaperBook = books[lowr];
  console.log('cheaper book', books[lowr]);

  books[actual] = cheaperBook;
  books[lowr] = actualBook;
}

console.log(books);