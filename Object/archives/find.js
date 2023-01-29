// Exportando objetos JSON:

const clientes = require("../json/clientes.json");

//1 => Função para encontrar determinado objeto a partir de uma key específica;

function searchObject(arr, key, value){
    return arr.find((item) => item[key] === value);
}

/* Definindo que iremos buscar através
 de um array, e por uma chave, 
com parâmetros */

const find = searchObject(clientes, "nome", "Kirb");
console.log(find);

/* Explicação: Aqui como colocamos os três parâmetros, 
primeiro recebemos o próprio array de valores, 
segundo definimos qual a chave a ser acessada na busca,
terceiro qual o valor dessa chave. */