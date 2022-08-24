const { edGalho, edFolha } = require("./module");

function algorithm(lista1, lista2) {
  // Criando lista final;
  let finalList = [];
  // Variável de controle de índice de cada lista;
  let list1Position = 0;
  let list2Position = 0;
  //  Variável de controle de índice para lista final;
  let atual = 0;

  while (
    indexList1 < lista1.length &&
    indexList2 < lista2.length
  ) {
      /// Variável de identificação do preço de cada índice atual do array...
    let indexList1 = lista1[list1Position];
    let indexList2 = lista2[list2Position];

    if (indexList1.price < indexList2.price) {
      finalList[atual] = indexList1;
      list1Position++;
    } else {
      finalList[atual] = indexList2;
      list2Position++;
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
  while (list1Position < lista1.length) {
    finalList[atual] = lista1[list1Position];
    list1Position++;
    atual++;
  }

  while (list2Position < lista2.length) {
    finalList[atual] = lista2[list2Position];
    list2Position++;
    atual++;
  }

  return finalList;
}

console.log(algorithm(edGalho, edFolha));
