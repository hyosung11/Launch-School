/* JS109 Study Group

Introductions
- Juliette
- H
- Jason Aricheta, JS109 - describing code
- Laurent, JS109
- Alec Foster, JS109, went quick through previous courses
- Edris, JS109 preparing for the written assessment

Written Assessment Format
- snippets of code --> what does the code do and why?
- identify the underlying concept
- methodically review the study guide topics
  - explain to a friend
  - come up with examples
- precise language

- lots of questions on variable scoping
- some theoretical questions that are not based on code snippets

- practice the small problems (will help with wording by reviewing the discussion)

describe the snippets with written sentences and time yourself.

Interview Assessment Format
- be able to solve a medium level small problem in about 20 minutes
- record yourself practicing problems
- solve the problem
- use PEDAC
- write a good algorithm
- given test cases
- can add your own edge cases
- can have explicit condition that you need to test that doesn't have a test case

PRACTICE
Given this which outputs should we expect and why? Can you identify the underlying concept
*/

// Example 1
let animal = 'dog';

const speak = (animal) => {
  if (animal === undefined) {
    console.log('Bark');
  } else {
    console.log('Meow');
  }
};

speak();

/* This code will log 'Bark'
default values to
speak is invoked without an argument passed

speak invocation happens without an argument passed to it. JS doesn't throw an error, it accepts the parameter and passes undefined

variable shadowing in that `animal` parameter shadows the global `animal` variable declared on line 1
*/

// Example 2 - What does this program output and why?
let greeting = 'Hello';

const test = (str) => {
  str = str.concat(' World!');
  return str;
};

test(greeting);
console.log(greeting);

/* Discussion
returns string 'Hello World'
str is reassigned
function invocation
console.log logs 'Hello'

only outputs 'Hello'
greeting is passed by value so not mutated by what happens in the function

str.concat returns 'Hello World'
this value is never captured anywhere, so it is destroyed
*/

// Example 3 - What is output and why?
let greeting = ['Hello'];

const test = (str) => {
  str = str.concat(' World!');
  return str;
};

test(greeting);
console.log(greeting);

/* Discussion
passed by reference
console.log(greeting) will output ['Hello']

test(greeting)
concat doesn't mutate the array
passing greeting by reference
but concat doesn't mutate the original array
greeting still points to the same array hello

arr.concat returns a new array ['Hello', 'World']

*/

// Example 4 - What is output and why?
let greeting = ['Hello'];

const test = (arr) => {
  arr = arr.push(' World!');
  return arr;
};

test(greeting);
console.log(greeting);

/*
arr.push mutates the array and returns the length of the array
greeting is an object that is passed by reference
arr points to the same array that greeting points to in memory

*/

// Example 5
function test(str) {
  str + '!!!';
}

let word = test('Hello');

if (word) {
  console.log('Hi');
} else {
  console.log('Goodbye');
}

/*
no explicit return statement

test will implicitly return undefined

str is not assigned to anything
word is assigned to `undefined`

word is evaluated to false
so the else block executes
and "Goodbye" is logged

method returns something

Array.prototype.filter()
- parameters
- written values
- how it works

called on an array
returns a new array
takes a callback function
iterates over every element of the calling array and passes the current element to the callback function and evaluates the truthiness of that return value takes it or discards it and moves on to the next element
*/
console.log([0, 1, 2].filter(num => num));
