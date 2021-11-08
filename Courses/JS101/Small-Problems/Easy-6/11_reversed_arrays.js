/* JS101 - Small Problems > Easy 6 11. Reversed Arrays

Reversed Arrays

Write a function that takes an Array as an argument and reverses its elements in place. That is, mutate the Array passed into this method. The return value should be the same Array object.

You may not use `Array.prototype.reverse()`. */

function reverse(array) {
  let leftIndex = 0;
  let rightIndex = array.length - 1;

  while (leftIndex < array.length / 2) {
    [array[leftIndex], array[rightIndex]] = [
      array[rightIndex],
      array[leftIndex],
    ];
    leftIndex += 1;
    rightIndex -= 1;
  }
  return array;
}

// Examples:
let list = [1, 2, 3, 4];
let result = reverse(list);
console.log(result); // logs [4,3,2,1]
console.log(list === result); // logs true

let list1 = ["a", "b", "c", "d", "e"];
let result1 = reverse(list1);
console.log(result1); // logs  ["e", "d", "c", "b", "a"]
console.log(list1 === result1); // logs true

let list2 = ["abc"];
let result2 = reverse(list2);
console.log(result2); // logs  ["abc"]
console.log(list2 === result2); // logs true

let list3 = [];
let result3 = reverse(list3);
console.log(result3); // logs []
console.log(list3 === result3); // logs true

/* Discussion

This solution is straightforward; it sets one index to point to the beginning of the array, another index to point to the end of the array, and then walks through the Array exchanging elements at each step.

Note that the `while` loop terminates at the middle of the list. If we continued, we would end up rebuilding the original array.

In practice, of course, you would use `Array.prototype.reverse()` instead of writing this method. It helps, though, to write your own versions of standard methods so you can understand how they work, and how to use those principles in your own code. */