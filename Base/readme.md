## Base method🎚️

**We'll start working with an algorithm that will work with joining two arrays already ordered into another final array, thus making it a higher ordered array! It is a list of books we will start distinct for each, and so we will order from the lowest to the highest price of each book...**

---

```jsx
// Módulo:

const edFolha = [
  {
    titulo: "PHP",
    preco: 15,
  },
  {
    titulo: "JavaScript",
    preco: 25,
  },
  {
    titulo: "Java",
    preco: 30,
  },
  {
    titulo: "Go",
    preco: 45,
  },
  {
    titulo: "Elixir",
    preco: 50,
  },
];

const edGalho = [
  {
    titulo: "Python",
    preco: 20,
  },
  {
    titulo: "Rust",
    preco: 22,
  },
  {
    titulo: "Ruby",
    preco: 28,
  },
  {
    titulo: "C#",
    preco: 33,
  },
  {
    titulo: "C++",
    preco: 35,
  },
  {
    titulo: "Scala",
    preco: 40,
  },
];

module.exports = { edFolha, edGalho };
```

---

```jsx
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
}
return listaFinal;
}
```