/* Question 1

Will the code below raise an error?
*/

// let numbers = [1, 2, 3];
// console.log(numbers[6] = 5);
// console.log(numbers); // [ 1, 2, 3, <3 empty items>, 5 ]

// No error

// Bonus

let numbers = [1, 2, 3];
numbers[6] = 5;
console.log(numbers[4]); // what will this line return? => undefined