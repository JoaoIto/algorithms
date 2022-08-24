## Base method🎚️

**We'll start working with an algorithm that will work with joining two arrays already ordered into another final array, thus making it a higher ordered array! It is a list of books we will start distinct for each, and so we will order from the lowest to the highest price of each book...**

---

```jsx
// Module
const edFolha = [
  {
    title: "JavaScript",
    price: 25,
  },
  {
    title: "PHP",
    price: 15,
  },
  {
    title: "Java",
    price: 30,
  },
  {
    title: "Elixir",
    price: 50,
  },
  {
    title: "Go",
    price: 45,
  },
  {
    title: "Python",
    price: 20,
  },
];

const edGalho = [
  {
    title: "Python",
    price: 20,
  },
  {
    title: "Rust",
    price: 22,
  },
  {
    title: "Ruby",
    price: 28,
  },
  {
    title: "C#",
    price: 33,
  },
  {
    title: "C++",
    price: 35,
  },
  {
    title: "Scala",
    price: 40,
  },
];

module.exports = { edFolha, edGalho };

```

---

```jsx
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

```
---

After defining the entire array of our module, we have already defined 4 standard variables. They will be used within the 'while' repeating component... In the retry list we only place a conditional as long as the index size is smaller than the size of the two book arrays if it continues to run.

Thus what would be executed is the exchange of positions with two variables that would be the current product of all position exchanges of the current index, and thus would be executed the exchange of positions from the structure of if elseis.

---

**To solve this, we create these other while, for each list separately, so that when the other while is canceled, it itself will look at each list separately so that we can control and sort the two for the final list...**

**This algorithm solves our problem! With that now, we just say that even before returning the entire result, he checks if there are still elements within that list, and if so, that continue selecting and switching position in the final list, so we just make it give the following result:**

--- 
### Console Result:

```jsx
[
  { title: 'PHP', price: 15 },
  { title: 'Python', price: 20 },
  { title: 'Rust', price: 22 },
  { title: 'JavaScript', price: 25 },
  { title: 'Ruby', price: 28 },
  { title: 'Java', price: 30 },
  { title: 'C#', price: 33 },
  { title: 'C++', price: 35 },
  { title: 'Scala', price: 40 },
  { title: 'Go', price: 45 },
  { title: 'Elixir', price: 50 }
]
```

---