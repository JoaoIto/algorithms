const { edGalho, edFolha } = require("./module");

function algorithm(lista1, lista2) {
  // Criando lista final;
  let listaFinal = [];
  // Variável de controle de índice de cada lista;
  let posicaoAtualLista1 = 0;
  let posicaoAtualLista2 = 0;
  //  Variável de controle de índice para lista final;
  let atual = 0;

  while (
    posicaoAtualLista1 < lista1.length &&
    posicaoAtualLista2 < lista2.length
  ) {
      /// Variável de identificação do preço de cada índice atual do array...
    let produtoAtualLista1 = lista1[posicaoAtualLista1];
    let produtoAtualLista2 = lista2[posicaoAtualLista2];

    if (produtoAtualLista1.preco < produtoAtualLista2.preco) {
      listaFinal[atual] = produtoAtualLista1;
      posicaoAtualLista1++;
    } else {
      listaFinal[atual] = produtoAtualLista2;
      posicaoAtualLista2++;
    }

    atual++;
    /* A partir daqui temo sum problema!
    Quando criamos este tipo de while, precisamos pensar em algo...
    Como estamos usando uma condicional de "and", se uma dessa condicionais
    não for uma verdade, este loop será cancelado.*/
  }
  /*Para resolver isso, criamos estes outros while, para cada lista
separadamente, para que quando o outro while for cancelado, ele 
em si olhará para cada lista separadamente para que consigamos 
controlar e ordenar os dois para a lista final... */
  while (posicaoAtualLista1 < lista1.length) {
    listaFinal[atual] = lista1[posicaoAtualLista1];
    posicaoAtualLista1++;
    atual++;
  }

  while (posicaoAtualLista2 < lista2.length) {
    listaFinal[atual] = lista2[posicaoAtualLista2];
    posicaoAtualLista2++;
    atual++;
  }

  return listaFinal;
}

console.log(algorithm(edGalho, edFolha));
