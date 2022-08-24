const books = require('./module.js');

function lowrValue(arr, position) {
  let cheaper = position;
  
  for (let actual = position; actual < arr.length; actual++) {
    if (arr[actual].price < arr[cheaper].price) {
      cheaper = actual;
    };
  };
  return cheaper;
}

module.exports = lowrValue;