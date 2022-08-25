const lista = require("../module");

function search(array, first, last, index){
    const mid = Math.floor((first + last) / 2);
    const I = array[mid];

    if(index === I.price){
        return mid;
    };

    if(index < I.price){
        return search(array, first, mid-1, index);
    };

    if(index > I.price){
        return search(array, mid+1, last, index);
    };
};

console.log(search(lista, 0, lista.length - 1, 20));