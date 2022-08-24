const books = require('./module.js');

function inserction(list) {

  for (let actual = 0; actual < list.length; actual++) {
    let analisys = actual;
    while (analisys > 0 && list[analisys].price < list[analisys - 1].price) {
      let analisysItem = list[analisys];
      let lastItem = list[analisys - 1];
    
      list[analisys] = lastItem;
      list[analisys - 1] = analisysItem;

      analisys--;
    };
  };
  console.log(list);
};

inserction(books);