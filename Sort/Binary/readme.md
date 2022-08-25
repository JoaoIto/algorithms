# Binary Search 

**E se ao invés de um algoritmo de ordenação, tentássemos utilizar algoritmo em uma busca?**

**Basicamente até agora nos algoritmos de busca que vimos, aquele primeiro que pensamos em implementar com *for* vai percorrer todo um *array* para encontrar e devolver o elemento, ou ir até o final para dizer que não encontrou o elemento.** 

**Se tentássemos dividir a busca em partes, será que funcionaria melhor? Vamos ver então com um exemplo!**

<aside>
📜 A busca binária funciona como um jogo de adivinhação, que utilizamos a estratégia de anulação! Na qual ela funciona de forma que, temos um número determinado de oportunidades de acertar um número pré-definido, e assim tentamos acertá-lo chutando de cara a metade do valor de todos os números, e assim conseguimos destacar pelo menos metade deles, já dizendo se esse valor pode ser menor ou não com o primeiro… Assim conseguimos aplicar novamente esta regra, eliminando a nova metade, e assim teríamos logo 50% de chance de acerto, em 3 chutes!

---

## Code:

Começamos, que o algoritmo de busca é um que consegue dividir o array em 2 partes iguais e cada vez menores em quantidade de execuções da mesma função, ou seja assim, levamos em consideração 4 parâmetros (array, first, last, index), que será levado como a parte atrás, da frente, e o valor atual…

 Depois definimos qual o valor central, e a fonte a ser recorrida.

```jsx
const mid = Math.floor((first + last) / 2);
const I = array[mid];
```

Logo, assim fica fácil dizer que como cada comportamento deve ser, fazendo como que se o número já estiver menor, deve se comportar a esquerda (mid-1), e se for menor, a direita, (mid+1).

```jsx
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

console.log(search(lista, 0, lista.length - 1, 40));
```

---

Agora só precisamos de um valor base para ser definido no console, para que ele diga a posição do parâmetro indicado, que no caso, será 20…

### Resultado no console:

```jsx
console.log(search(lista, 0, lista.length - 1, 20));
```

```jsx
// Console:
2
```
---