// Exportando objetos JSON:

const clientes = require("../json/clientes.json");

// => Função para filtrar o objeto com informações determinadas;

function filterObject(arr) {
  return arr.filter((item) => {
    return (item.endereco.apartamento && 
        !item.endereco.hasOwnProperty("complemento"));
  });
}

/* Definindo que iremos buscar através
do próprio array */

const filter = filterObject(clientes);
console.log(filter);

/* Explicação: Definimos que precisamos achar um apartamento, 
porém que não tenha complemento, e para isso, usamos a propriedade
de hasOwnProperty, 
(https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty),
que busca através do método se há aquela chave...*/
