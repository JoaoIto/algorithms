const books = require("./final.js");
let cheaper = 0;

for (let actual = 0; actual < books.length; actual++) {
  if (books[actual].price < books[cheaper].price) {
    cheaper = actual;
  }
}

console.log(
  `The cheaper book is: ${books[cheaper].title} 
and his costs ${books[cheaper].price}`
);
