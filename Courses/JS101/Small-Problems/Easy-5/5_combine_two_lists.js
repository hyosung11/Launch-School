/* JS101 - Small Problems > Easy 5 > 5. Combine Two Lists

Combine Two Lists

Write a function that combines two arrays passed as arguments, and returns a new array that contains all elements from both array arguments, with each element taken in alternation.

You may assume that both input arrays are non-empty, and that they have the same number of elements. */

function interleave(array1, array2) {
  let newArray = [];

  for (let idx = 0; idx < array1.length; idx += 1) {
    newArray.push(array1[idx], array2[idx]);
  }

  return newArray;
}

// Emma Story - adds leftover value
// function interleave(...args) {
//   const result = [];
//   const longest = Math.max(...args.map(array => array.length));

//   for (let idx = 0; idx < longest; idx += 1) {
//     args.forEach(array => {
//       if (array.length > idx) {
//         result.push(array[idx]);
//       }
//     });
//   }

//   return result;
// }

// Example:
console.log(interleave([1, 2, 3], ['a', 'b', 'c'])); // [1, "a", 2, "b", 3, "c"]
console.log(interleave([1, 2, 3], ['a', 'b', 'c', 'd'])) // [ 1, 'a', 2, 'b', 3, 'c' ] --> doesn't add 'd'

/* Discussion

The solution iterates `n` number of times; where `n` is the value of the `length` of either `array1` or `array2`. At every iteration it pushes the appropriate values from `array1` and `array2` to the `newArray` variable. Since `push` can take one or more arguments, we take a shortcut and push both values at the same time instead of calling `push` twice.

Further Exploration

Try to solve this problem using `Array.prototype.forEach` method.

Can you solve it using `map` or `reduce`? */

/* Juan Juy

Further Exploration

The `forEach` solution is pretty basic, so I'll talk about the `reduce` solution here.

We use 3 of the reduce arguments in the callback - acc for the accumulator, cv for the current value, and idx for the current index. We also initialize an empty array [] as the initial value (it's after the callback function).

This is how I understand how reduce works: reduce iterates through each element in the array, while keeping track of a running 'total', the accumulator. Each iteration is designed to influence the accumulator in some way, and output a single value at the very end. In our case, that single value is an array, hence why our initial value is an empty array.

On each iteration, we are pushing both the cv and the respective index of arr2. Keep in mind that cv is equivalent to arr1[idx] here. Then, we need to return our new value of acc, because that is what acc's value is on the next iteration.

Thinking of it imperatively, before the callback functions start, acc is []. After the first iteration, acc is [1, 'a']. After the second iteration, acc is [1, 'a', 2, 'b']. Finally, the third iteration returns acc's value as [1, 'a', 2, 'b', 3, 'c'].

I thought map wasn't possible since it always returns an array of the same length. We only have two 3-element arrays, while the output needs to be 6 elements. But I did see a solution by a student below that seems to use spread syntax to effectively flatten an array of nested arrays (so map essentially only produced 3 values as it should have, but those 3 values were pairs). 

/* Rakesh Chaparala

Hey Bob, I have been and continue to learn a ton from your solutions.
Thank you very much for sharing not only the code but your process too.

For the reduce solution, I believe the push operation needs to be a separate one from the callback's return. I tend to forget the explicit return to reduce more often than not and ran into the same issue.

I did this to fix it: */

// function interleave(array1, array2) {
//   return array1.reduce((zipped, el, idx) => {
//     zipped.push(el, array2[idx]);
//     return zipped;
//   }, []);
// }
