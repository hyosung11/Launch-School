// Array Element Assignment

let numbers = [1, 2, 3, 4];
numbers[0] = numbers[0] + 1; // => 2
numbers; // => [ 2, 2, 3, 4 ]

// Note that this way of modifying an array is a destructive action; that is, the numbers array is mutated.

// In the node REPL or a code file, use the same method to increase the value of the rest of the numbers in the array by 1. Also, try incrementing an element that doesn't exist, such as numbers[4].

console.log(numbers[1] = numbers[1] + 1);
console.log(numbers[2] = numbers[2] + 1);
console.log(numbers[3] = numbers[3] + 1);
console.log(numbers[4] = numbers[4] + 1);
console.log(numbers); // => [ 2, 3, 4, 5, NaN ]
