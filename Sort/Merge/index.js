const lista = require("../module");

function merge(array){
    if(array.length > 1){
        const meio = Math.floor(array.length / 2);
        const parte1 = merge(array.slice(0, meio));
        const parte2 = merge(array.slice(meio, array.length));
        array = order(parte1, parte2);
    };
    return array;
};

function order(parte1, parte2){
    let atualParte1 = 0;
    let atualParte2 = 0;
    const result = [];

    while (atualParte1 < parte1.length && atualParte2 < parte2.length){
        let produtoAtualParte1 = parte1[atualParte1];
        let produtoAtualParte2 = parte2[atualParte2];

        if(produtoAtualParte1.preco < produtoAtualParte2.preco){
            result.push(produtoAtualParte1);
            atualParte1++;
        }else{
            result.push(produtoAtualParte2);
            atualParte2++;
        };
    };

    return result.concat(atualParte1 < parte1.length ? parte1.slice(atualParte1) : parte2.slice(atualParte2));
};

console.log(merge(lista));