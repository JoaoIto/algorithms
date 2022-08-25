const lista = require("../module");
const trocaLugar = require("../troca")

function quickSort(array, left, right){
    if(array.length > 1){
        let indexI = close(array, left, right);
        if(left < indexI - 1){
            quickSort(array, left, indexI - 1);
        };
        if(indexI < right){
            quickSort(array, indexI, right);
        };
    };
    return array;
};

function close(array, left, right){
    let index =  array[Math.floor((left + right)/ 2)];
    let leftI = left;
    let rightI = right;

    while(leftI <= rightI){
        while(array[leftI].price < index.price){
            leftI++;
        };

        while(array[rightI].price > index.price){
            rightI--;
        };

        if(leftI <= rightI){
            trocaLugar(array, leftI, rightI);
            leftI++;
            rightI--;
        };
    };
    return leftI;
};

console.log(quickSort(lista, 0, lista.length - 1));