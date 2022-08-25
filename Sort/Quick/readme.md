# `Quick Sort()`

**The "quick organization method", or *Quick Sort*, is one that uses as a basis an organization pivot of this array, in which it basically takes a base value, and thus uses it so that it can organize the others at the given value of the pivot.**

---

**First we organize the pivot algorithm, which will traverse the entire array in basic format of a repeating list, in which it will traverse the entire array that will be divided by 2. So that it can make it pass through all the elements that are now "right" and "left", or 2 split arrays...**

### In this way:

```jsx
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
```

---

**After that, the organization just say a parameter index, so that it can identify which pivot is being traveled and so it will say what exactly it should get, knowing the elements of left and right and their price values!**

```jsx
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
```

### Console Result: 

```jsx
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
```
---