/* JS109 Study Group

Introductions
- name, where you are in the world, curriculum, assessment status
- Juliette, France
- H
- Tristan (Edward) Revells, Lesson 6
- Adhitiani Suzanthi, Hungary, Lesson 5
- Vikram Swamy, Cleveland, finished 101 a few months ago, finish written assessment this month
- Michael Cremonini, in Santa Cruz, in JS101 Lesson 4

Written Assessment
- three hours, must time yourself, no timer
- time management is critical
- force yourself to time each question for six minutes
- need to answer all the questions to pass
- given code snippet about ten lines long: explain what happens and why
- JS109 gives you a study guide that you need to master before taking the written assessment
- expect precise and clear answers

If you're asked to revise your answers, it's to check your understanding.


Interview Assessment
- code challenge with two problems in less than an hour
- use PEDAC or problem-solving process
- be able to solve medium level small problem in 20 minutes
- practice coding live with another person
- cannot use documentation
- can try out code in the repl

*/
// function test(str) {
//   str + "!!!"
// }

// let word = test("Hello");

// if (word) {
//   console.log("Hi");
// } else {
//   console.log("Goodbye");
// }

/* Discussion
function will return undefined
no explicit return statement, so `test` returns undefined
one line arrow functions do not need a return keyword

word evaluates to false or is a falsy value

Falsy Values in JavaScript:

*/

// let animal = "dog";

// const speak = animal => {
//   if (animal === undefined){
//     console.log("Bark");
//   } else {
//     console.log("Meow");
//   }
// }

// speak(); // Bark

/*
animal is global variable assigned to the value of "dog"
function declaration
strictly equal
function call does not pass an argument
function speak requires an argument, but in JS this is passed as undefined
this is an example of variable shadowing
- parameter animal shadows the outer scope variable animal

*/

// let animal = 'dog';

// const speak = () => {
//   if (animal === undefined) {
//     console.log('Bark');
//   } else {
//     console.log('Meow');
//   }
// };

// speak(); // Meow

/*
removed the parameter animal
no animal variable shadowing the global variable animal
else statement is executed
prints Meow
*/

// let greeting = "Hello";

// const test = str => {
//   str = str.concat(" World!");
//   return str;
// }

// console.log(test(greeting));
// console.log(greeting);

/*
reassign
mutate
return
print

value of is not captured
hello is a primitive passed by value, holds copy of value, so doesn't impact the outer scope greeting, not reassigning
never reassign the greeting variable, not mutated, passed by value
*/

// What happens when this code is run and why?
// let greeting = ['Hello'];

// const test = (arr) => {
//   arr = arr.concat('World!');
//   return arr;
// };

// test(greeting);
// console.log(greeting);

/* Discussion
declare function test with one parameter `arr`
invoke the function test with greeting as the argument
log greeting

the function will return ["Hello World"]
log will return [ "Hello" ]

concat is not a destructive method, it returns a new array
invoke concat on arr which points tot he same element as greeting which is passed by reference
- both point to the same place in memory which stores ['Hello']

reassign `arr` to ... connection is broken
never mutated arr, so on line 10
*/

let greeting = ['Hello'];

const test = (arr) => {
  arr = arr.push('World!');
  return arr;
};

console.log(test(greeting)); // => 2 push is a mutating method and returns the length of the new array
console.log(greeting);
