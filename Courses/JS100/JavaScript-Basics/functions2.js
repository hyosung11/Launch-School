// Greet 1
// How can we alter the function definition of greet so that the parameter `greeting` is assigned a default value of `'Hello'` when no argument is passed to the function invocation?

// default parameter
// function greet(greeting = 'Hello') {
//   console.log(greeting + ', world!');
// }

// console.log(greet('Salutations')); // logs: Salutations, world!

// console.log(greet());  // logs: undefined, world!
                      // should log: Hello, world!

// (greet(undefined)); // Hello, world!

// Greet 2
// Change the function `greet` from the previous exercise, so that it takes two arguments: a greeting with `'Hello'` as default value, and a recipient with `'world'` as default value. The behavior should then be as follows:

// function greet(greeting = 'Hello', recipient = 'world') {
//   // console.log(greeting + ',' + ' ' + recipient);
//   // template literal version
//   console.log(`${greeting}, ${recipient}!`)
// }

// greet(); // Hello, world!
// greet('Salutations'); // Salutations, world!
// greet('Good morning', 'Launch School'); // Good morning, Launch School!

// Greet 3
// Now we are going to outsource the greeting and recipient to functions. Change the function `greet` from the previous exercise, so that it doesn't take any arguments, and instead calls the functions `greeting` and `recipient` defined below.

// Calling greet() should log Good morning, Launch School! to the console.

function greeting() {
  return 'Good morning';
}

function recipient() {
  return 'Launch School';
}

function greet() {
  console.log(`${greeting()}, ${recipient()}!`)
}

greet() // 'Good morning, Launch School!'