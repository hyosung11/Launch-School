/* JS101 - Small Problems > Easy 6 > 6. Counting Up

Counting Up

Write a function that takes an integer argument and returns an array containing all integers between 1 and the argument (inclusive), in ascending order.

You may assume that the argument will always be a positive integer.

- input: number
- output: array

ALGORITHM
- declare variable initialized to an empty array
- loop as many times as input number
  - add number to array at each iteration
- return array */

function sequence(limit) {
  let result = [];

  for (let num = 1; num <= limit; num += 1) {
    result.push(num);
  }

  return result;
}

// Examples:
console.log(sequence(5));    // [1, 2, 3, 4, 5]
console.log(sequence(3));    // [1, 2, 3]
console.log(sequence(1));    // [1]

/* Discussion

The solution uses a `for` loop to create the sequence and store it in the `result` array. The key parts are determining the starting value of the loop (`i = 1`) and determining the stopping condition (`i <= limit`).

Further Exploration

Can you use `forEach` or `map` in your solution? Why or why not? */

// David Pocsai
// let sequence = (num) => [...Array(num)].map((_, idx) => idx + 1);

/* `[...Array(num)]` the Array constructor creates a new array with the number of values specified in its argument. These are initially empty values and the array appears as: `[ <5 empty items> ]` if the input number is 5. Using the `...` spread operator makes an array that appears as: `[undefined,undefined,undefined,undefined,undefined]` if the input number is 5.

Using map, we set each element to index + 1. We don't need the first argument of the current element, so we leave that as an underscore, implying it's not needed. If we were to simply leave it blank, javaScript would interpret idx as the current value argument, instead of the index argument.

For an input of 5... iteration 1: map sets the first value to idx(0) + 1 =1 iteration 2: map sets the second value to idx(1) +1 =2 iteration 3: map sets the third value to idx(2) +1 =3 iteration 4: map sets the fourth value to idx(3)+1 =4 iteration 5: map sets the fifth value to idx(4) + 1 =5

There are no more elements, since we set the number of elements in the array equal to the input number, so map is done its job and we can return the whole expression.*/