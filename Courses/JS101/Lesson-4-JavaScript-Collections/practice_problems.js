// What is the return value of the filter method call below? Why?
[1, 2, 3].filter(num => 'hi');

/* Answer - Alex

The filter method will return a copy of the original array containing all its elements. The filter method takes a callback function as its argument and for each element for which the callback function evaluates as true, adds that element to the new array. Therefore, since 'hi' is returned by the callback function for each element and 'hi' always evaluates as true, each element will be filtered into the new array */

// What is the return value of `map` in the following code? Why?
[1, 2, 3].map((num) => {
  num * num;
});

/* Answer

The return value will be `[undefined, undefined, undefined]`. The `map` method returns a new array that transforms each element of the original array into the return value of the callback function for that element. Since the callback function has no explicit return statement, it always returns `undefined`. Therefore, each element in the original array is transformed into `undefined` in the new array. */

// Practice Problem 4
// console.log(['ant', 'bear', 'caterpillar'].pop().length);
// 11

/* Practice Problem 6

How does `Array.prototype.fill` work? Is it destructive? How can we find out? */

// let arr = [1, 2, 3, 4, 5];
// console.log(arr.fill(1, 1, 5));
// console.log(arr);

/* Practice Problem 7

What is the return value of `map` in the following code? Why? */

// console.log(['ant', 'bear'].map(elem => {
//   if (elem.length > 3) {
//     return elem;
//   }
// }));

// [ undefined, 'bear', 'monkey', undefined ]

/* Discussion
The return value will be [ undefined, 'bear' ]. The `map` method returns a new array in which each element is transformed into the return value of the callback function that `map` takes as an argument. Since the second element `bear` has a length larger than 3, the if statement evaluates as true and the callback function returns the element itself, `bear`. But for the first element, the if statement evaluates as false because `ant` has a length that is not greater than 3, and so there is no explicit return statement. Since the callback function has no explicit return statement, it returns `undefined` and so the `map` method returns `undefined` and `bear`.
*/

/* Practice Problem 8

Write a program that uses this array to create an object where the names are the keys and the values are the positions in the array:

input: array
output: object

loop through the array
  - make each name a property of the object
  - and make its value equal to its index */

let flintstones = ['Fred', 'Barney', 'Wilma', 'Betty', 'Pebbles', 'Bambam'];

let flintstonesObj = {};

flintstones.forEach((name, index) => {
  flintstonesObj[name] = index;
});

// console.log((flintstonesObj));
// { Fred: 0, Barney: 1, Wilma: 2, Betty: 3, Pebbles: 4, Bambam: 5 }

/* ==================

Practice Problem 9 *

Add up all of the ages from the Munster family object: */

// let ages = {
//   Herman: 32,
//   Lily: 30,
//   Grandpa: 5843,
//   Eddie: 10,
//   Marilyn: 22,
//   Spot: 237,
// };

// let totalAges = 0;
// Object.values(ages).forEach(age => totalAges += age);

// console.log(totalAges); // => 6174

// Another option would be to use Array.prototype.reduce method:
// console.log(Object.values(ages).reduce((agesSum, currentAge) => agesSum + currentAge, 0)); // => 6174

/* ====================

Practice Problem 10

Pick out the minimum age from our current Munster family object:

PEDAC
input: object
output: number

Hint
- Investigate JavaScript's spread syntax. It should come in handy in this exercise. */

let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237,
};

let agesArr = Object.values(ages);
console.log(Math.min(...agesArr)); // => 10
