# ``Merge Sort()``

**We start with a cluttered array. We're going to divide this array into two parts that are still cluttered. Let's try to divide a little more. So the two cluttered parts of the array let's split back into two parts. And so we continue to divide more and more this group to increasingly gain more space for our ordination**

**Now let's see in code?**

---

As soon as we begin a repeating list, in which the count index of the current array, it as long as it is smaller than the main size itself, it will, meanwhile, exchange parts with the help of conditional terms (if else).

Just doing the push action, for that part that contain the lower price, making them ordered! Okay, now we've done the logical part, but we need to concatenate this into both parts, saying that as soon as we're done, he needs to return to the concatenation of these two parts! Using the base concatenation function, called concat( ), which plays the role of joining the two into smaller parts and delivering the result in the main array!

```jsx
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
```
--- 
Now that we've built to understand this part, we just need to do our own merge function itself!

**The merge function in which we use as a parameter as a base, and then we use a simple conditional, in which we only say that an array if it has its size greater than 1, (can be divided into smaller parts), so then we just define what it should do by the next paths... The division is based on 3 variables:**

- `const mid = Math.floor(array.length / 2);`
    
    **Basically, it makes it possible what would be the middle of the array, causing it to all be divided equally by its main size.**
    
- **`const half1 = merge(array.slice(0, mid));`**
    
    **Part 1, would be given by the merge function itself, in which we will use it from the function of the array itself, in which we divide it in half!**
    
- **`const half2 = merge(array.slice(mid, array.length));`**
    
    **In this 2 and last part of the division, it takes the middle of the array and its total size, and still divides into a slightly smaller part, causing it to be divided more and more often...** 
    
    ---
    

**It still only needs to put as parameter of this function, the one we just made (order() ). After that, we just need to return the array itself with these parts already divided, and so we did the base merge function( )!**

```jsx
function merge(array){
    if(array.length > 1){
        const mid = Math.floor(array.length / 2);
        const half1 = merge(array.slice(0, mid));
        const half2 = merge(array.slice(mid, array.length));
        array = order(half1, half2);
    };
    return array;
};
```

---