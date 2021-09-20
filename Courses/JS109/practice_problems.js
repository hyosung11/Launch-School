// 1. What does this code log and why?
// let a = 1;

// function doit(a) {
//   console.log(a);
// }

// doit(3); // => 3
// console.log(a); // => 1

/*
This code logs `3` on the invocation of the function `doit` on line 8 and `1` from the `console.log` method on line 9. On line 2, the global variable `a` is declared and initialized to the value of `1`. The `doit` function is declared on line 4 and accepts one argument, here the variable `a`. This variable `a` shadows the global variable `a` on line 2. The `console.log` method logs the global variable `a` from line 2.


*/

// 2.
// function changeName(name) {
//   name = 'bob';
// }

// function anotherFunction() {
//   let name = 'jim';
//   changeName(name);
//   console.log(name);
// }

// anotherFunction(); // => 'jim'

// 3.
let greeting = 'Hello';

while (true) {
  greeting = 'Hi';
  break;
}

console.log(greeting);

// 4.
let hello = 'Hello, world!';
function myFunc() {
  console.log(hello);
}

myFunc();

