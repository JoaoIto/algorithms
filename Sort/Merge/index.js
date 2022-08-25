const lista = require("../module/");

function merge(array){
    if(array.length > 1){
        const mid = Math.floor(array.length / 2);
        const half1 = merge(array.slice(0, mid));
        const half2 = merge(array.slice(mid, array.length));
        array = order(half1, half2);
    };
    return array;
};

function order(half1, half2){
    let indexHalf1 = 0;
    let indexHalf2 = 0;
    const result = [];

    while (indexHalf1 < half1.length && indexHalf2 < half2.length){
        let atualHalf1 = half1[indexHalf1];
        let atualHalf2 = half2[indexHalf2];

        if(atualHalf1.preco < atualHalf2.preco){
            result.push(atualHalf1);
            indexHalf1++;
        }else{
            result.push(atualHalf2);
            indexHalf2++;
        };
    };

    return result.concat(indexHalf1 < half1.length ? half1.slice(indexHalf1) : half2.slice(indexHalf2));
};

console.log(merge(lista));