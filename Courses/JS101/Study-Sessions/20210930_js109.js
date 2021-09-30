/* JS109 Study Group

Introductions
- Juliette
- Mel, finished Lesson 6
- H
- Hans, camera not working, JS109 preparing for written assessment

Written Assessment Guidelines
- multiple clocks

returning and logging are different concepts

2/3 questions are code snippets and 1/3 are theoretical
*/

// What does this program log and why?
let animal = "dog"

const speak = animal => {
  if (animal === undefined) {
    console.log("Bark")
  } else {
    console.log("Meow")
  }
}

speak();


/*
variable shadowing
function without required argument js takes the value undefined
*/

let animal = "dog"

const speak = () => {
  if (animal === undefined) {
    console.log("Bark")
  } else {
    console.log("Meow")
  }
}

speak(); // 'Meow'
/*
parameter is not shadowing the global variable

*/

function test(str) {
  str + "!!!"
}

let word = test("Hello");

if (word) {
  console.log("Hi");
} else {
  console.log("Goodbye");
}

/*
the test function as defined doesn't have an explicit return statement therefore returns undefined
word is undefined
why do we print goodbye

if condition is evaluated as false
word is a falsy value
else branch is executed

the if branch is not evaluated
- word is falsy therefore the if branch is not executed and the else branch is executed
*/

let greeting = "Hello";

const test = str => {
  str = str.concat(" World!");
  return str;
}

test(greeting);
console.log(greeting);

/*
pass-by-value of the string 'Hello'
- passing a copy
- two 'Hello' copies
*/

let greeting = ["Hello"];

const test = arr => {
  arr = arr.concat(" World!");
  return arr;
}

test(greeting);
console.log(greeting);

/*
logs 'Hello' 
arrays get passed into functions by reference
the concat method returns a new array - non-mutating
doesn't affect the original array
two arrays in memory
- ['Hello']
- ['Hello', 'World' ]
*/

let greeting = ["Hello"];

const test = arr => {
  arr = arr.push(" World!");
  return arr;
}

test(greeting);
console.log(greeting);

/*
arr points to the same method
push mutates the array by adding a second element
logs two element array
push returns the length of the array - an oddity of JavaScript
*/

let b = 2;

function test(a) {
  a = b;
  return a;
}

test(5);
console.log(b); // logs the global variable b
console.log(a);

/*
assigns the global variable `b`

*/

let b = 2;

function test(b) {
  return b += 5;
}

console.log(test());

/*
b variable shadowing by the b parameter
no argument passing through the function
value of b when we don't pass a parameter to `test` is undefined

*/
let b = 2;

function test(b) {
  // b === undefined
  // b = b + 5
  return b += 5;
}

console.log(test()); // => NaN

/*
Array.prototype.map()
/*


Array.prototype.map()
- called on an array
- takes a callback function as an argument
- returns a new array
- used for transformation
- map uses the return value of the callback function to transform the inital elements into new array elements
*/
[0, 1, 2].map(num => num)

/*
Array.prototype.filter()
- called on an array
- takes a callback function as an argument
- returns a new array
- evaluates to true / is truthy
*/
[0, 1, 2].filter(num => num); // =>  [1, 2]


["ant", "bear"].map((elem) => {
  if (elem.length > 3) {
    return elem;
  }
});

/*
[ undefined, 'bear' ]


*/