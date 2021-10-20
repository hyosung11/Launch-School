/* SPOT Study Session

Introductions
- Miles
- Vic, Singapore, syntax
- Ryan, Louisiana, about to take JS109 Written Assessment, precision of language
- H, challenge

1. Mutability vs Immutability vs `const`

primitive values
string
boolean
number
undefined
null
bigint symbol

2. Pass by value vs pass by reference
*/
let numArray = [1, [2], 3];

function passByValue(arr) { /*This line we have pass-by-reference, b/c an array is passed in when called*/

  arr.forEach(num => { /*This line we have pass-by-value for index 0, pass-by-reference for index 1, then back to pass-by-value for index 2*/
    typeof num === 'object' ? num[0] += 1 : num += 1;
    console.log(num);
  });
}

passByValue(numArray); // => logs 2, [3], 4 respectively

console.log(numArray); // => [1, [3], 3]

/* 3. Variables as Pointers

*/

let test = 'this is a test';

if (test === 'this is a test') {
  let test2 = 'new test';
}

console.log(test);
console.log(test2);

/* The code snippet logs the string value `this is a test` and then logs a reference error to the console. */

/* 4. `filter`
what does it return - new array
what about the return of the callback matters?

*/